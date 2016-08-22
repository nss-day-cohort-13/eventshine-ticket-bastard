# Event Ticketing System

Your mission is to design, model, and build a Django application that allows a user to purchase a ticket to an event, and allows a user to create an event.

# Authentication

Make sure you enable the [SessionMiddleware](https://docs.djangoproject.com/en/1.10/topics/http/sessions/) for your application.

## Register a User

1. Add a `/register` route to your application that will display a form where a user can enter in their email address and a password to create an account.
1. POST the form and use the built-in Django [user authentication model](https://docs.djangoproject.com/en/1.10/topics/auth/default/#creating-users) to allow users to create a new account in your application.

## Authenticate User

1. Add a `/login` route to your application that will return a login form where a user can enter in their email address and password.
1. POST the form and [authenticate the user](https://docs.djangoproject.com/en/1.10/topics/auth/default/#how-to-log-a-user-in).


## Authenticated Routes

Django provides a [@login_required](https://docs.djangoproject.com/en/1.10/topics/auth/default/#the-login-required-decorator) decorator that you can put on any view to ensure that a user cannot access certain parts of the application without logging in first. You can also use the [LoginRequired](https://docs.djangoproject.com/en/1.10/topics/auth/default/#the-loginrequired-mixin) mixin to accomplish the same feature.
