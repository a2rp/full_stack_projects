# Laravel MySQL CRUD with Authentication

**Collection source:** [Full Stack Projects](https://github.com/a2rp/full_stack_projects/tree/main/projects/laravel-mysql-crud-with-authentication)

A server-rendered Laravel inventory app with registration, login, profile management, and product CRUD backed by a MySQL-compatible database.

![Authenticated Product Manager preview](public/preview.png)

## Features

- Register, sign in, reset passwords, and update profile information
- Protect product create, edit, and delete actions behind authentication
- Store product name, description, whole-number quantity, and two-decimal unit price
- Validate submitted values against database field limits
- Paginate the inventory list by latest creation date
- Use CSRF-protected forms and escaped Blade output
- Build Tailwind styles and browser scripts with Vite

## Stack

- Laravel 10 and PHP 8.1
- Blade, Eloquent, and Laravel authentication scaffolding
- MySQL-compatible database
- Tailwind CSS, Alpine.js, and Vite

## Run locally

This repository contains the Laravel app scaffold and targets PHP 8.1/Laravel 10. Install PHP, Composer, Node.js, and MySQL. Then:

```powershell
Copy-Item .env.example .env
composer install
php artisan key:generate
```

Create the database configured by `DB_DATABASE` in `.env`, then run:

```powershell
php artisan migrate
npm install
npm run build
php artisan serve
```

Open [http://localhost:8000](http://localhost:8000). The product list is available at `/product`; register or sign in to create, edit, or delete products.

## Runtime support

This is a legacy learning project. Laravel 10 security support ended on February 4, 2025, and PHP 8.1 reached end of life on December 31, 2025. Upgrade to a supported Laravel release and PHP version before production use. Regenerate `composer.lock`, review the app, and run its test suite as part of that upgrade. Laravel 13 requires PHP 8.3 or newer.

- [Laravel release support policy](https://laravel.com/docs/releases#support-policy)
- [PHP supported versions](https://www.php.net/supported-versions.php)

## Production note

All authenticated users share the same product catalog and can edit or delete any product; there are no owner roles or per-product policies. Add authorization and use a supported Laravel/PHP stack before using this app for real inventory.

## Links

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [a2rp](https://github.com/a2rp)
- CodePen: [ash1198](https://codepen.io/ash1198)
- LinkedIn: [Ashish Ranjan](https://www.linkedin.com/in/aashishranjan)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://patreon.com/a2rp)
