---
title: MailChimp, Gibbon, and Rails - Basic Mailing List Setup
date: "2014-01-23T22:12:03.284Z"
path: "/mailchimp-gibbon-rails/"
description: "You’ve made it to the big time when you want to start a mailing list. There are many ESP’s (email service providers) out there, each with respective strengths and weaknesses."
---

![mailchip logo](./logo.png)

You’ve made it to the big time when you want to start a mailing list. There are many ESP’s (email service providers) out there, each with respective strengths and weaknesses. I’d recommend checking into [MailChimp](https://mailchimp.com/) as they provide an “entrepreneur’s plan” that allows you to send 12,000 emails a month to 2,000 subscribers – __for free, for life.__ And because I have no experience with any other ESP…

This tutorial will cover MailChimp’s integration with Rails using the [Gibbon](https://github.com/amro/gibbon) gem. We will be building a simple Rails application that will display a form to collects users’ email addresses and add them to a MailChimp email list.

It is assumed that you possess a basic/intermediate understanding of Ruby (v. 1.9.3) and Rails (v. 4.0.2).

__Note:__ this tutorial covers MailChimp’s V2 of their API.

----

## Part One: MailChimp

Before we jump into Rails, we need to do three things: 1) obtain our API key, 2) make an email list with MailChimp; 3) obtain that list’s ID.

__1)__ Once logged into your MailChimp account, look to the left, select your name, and then “Account Settings” in the popup menu. Next, click the “Extras” dropdown and select “API Keys”. Voilla, you have your API key.

__2)__ To generate an email list, select “Lists” from the menu on the left. In the top-right corner, click “Create List” to begin the process. Hint: it’s relatively straight forward.

__3)__ To get the ID of the list you just created, select “List” from the menu on the left. This displays a list of lists…Click on the name of your new list, then the “Settings” dropdown, and select “List name & defaults”. Now you have your list ID. Super.

----

## Part Two: Rails

The Rails integration involves five steps: 1) adding the Gibbon gem to your gemfile; 2) creating an intializer file; 3) generating a controller and 4) a view; and 5) configuring your routes.

__1)__ Add the Gibbon gem to your gemfile and run bundle in your terminal. [Gibbon is an API wrapper for MailChimp’s Primary and Export APIs](https://github.com/amro/gibbon), or, in other words, a chunk of code you can drop into your project and work with quickly. There are quite a few MailChimp API Wrappers spanning a variety of languages.

```ruby
#Gemfile

gem 'gibbon', git: 'git://github.co/amro/gibbon.git'
```

Take note: other [tutorials](http://mrgeorgegray.com/workflow/getting-a-grip-on-gibbon/) reported issues running the correct version of the gem. If you encounter a similar problem, try adding `git: ‘git://github.co/amro/gibbon.git’` to your gemfile so it points to the gem’s repository.

__2)__ Create a new initializer file, ‘gibbon.rb’, in ‘config/initializers’ to declare your MailChimp API key and two other variables. Setting throws_exception to false will give you a pretty hash in the event of an error.

```ruby
#config/initializers/gibbon.rb

Gibbon::API.api_key = "YOUR-API-KEY"
Gibbon::API.timeout = 15
Gibbon::API.throws_exceptions = false
```

__3)__ Generate a controller `emailapi` to handle MailChimp’s API calls and create a method `subscribe` that will be responsible for taking users’ email input and pushing it to your mailing list.

```ruby
#app/controllers/emailapi_controller.rb

def index
end

def subscribe

    @list_id = "YOUR-LIST-ID"
    gb = Gibbon::API.new

    gb.lists.subscribe({
      :id => @list_id,
      :email => {:email => params[:email][:address]}
      })

end
```

The variables `@list_id` and `gb` are respectively defined as the ID of the list you created (from Part One, remember?) and an instance of the API wrapper. The latter is pulling from the `app/config/initializers/gibbon.rb`.

Next, we make an API call – `.lists.subscribe()` – on the instance itself. This call takes a hash as an argument, and in this hash, we pass two parameters: `:id`, associated with the ID of your list, and `:email`, associated with the user’s email (this will become clearer after we construct the view).

__4)__ Having completed the controller, let’s make the corresponding view. Create a file `index.html.erb` in `/app/views/emailapi`.

```ruby
#app/views/emailapi/index.html.erb

<h1>Get My Awesome News Letter</h1>
<p>Give me your email and keep up to date on my cat's thoughts.</p>
<%= form_tag('/emailapi/subscribe', method: "post", id: "subscribe", remote: "true") do -%>
   <%= email_field(:email, :address, {id: "email", placeholder: "email address"}) %>
   <%= submit_tag("Sign me up!") %>
<% end %>
```

Beneath the `<h1>` and `<p>` html elements, use a Rails helper `form_tag` to create the sign up form. Pass in four paramaters:

1. The action the form is going to take, or where the form will be submitted
2. The HTML method defining how the action will occur, in this case `post`
3. The form’s ID
4. Set `remote` to `true`, allowing unobtrusive JS drivers to modify the the form’s behavior.

Lastl, the `submit_tag` method creates our `<input>` tags. Our form is rendered in HTML as seen below:

```html
<h1>Get My Awesome News Letter</h1>
<p>Give me your email and keep up to date on my cat's thoughts.</p>
<form accept-charset="UTF-8" action="/emailapi/subscribe" data-remote="true" id="subscribe" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>   <input id="email" name="email[address]" placeholder="email address" type="email" />
   <input name="commit" type="submit" value="Sign me up!" />
</form>
```

To learn more about forms, check out the [documentation](http://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html).

For more information on the subscribe API call, check out the [official documentation](https://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/#create-post_lists_list_id_members).

__5)__ Last, set your routes in `config/routes.rb`.

```ruby
#config/routes.rb

root 'emailapi#index'
post 'emailapi/subscribe' => 'emailapi#subscribe'
```

----

## Conclusion

Alright, you should be good to go. Keep in mind, this tutorial barely scratches the surface of MailChimp + Rails + Gibbon.
