{
    'name': 'Jewel Theme',
    'description': 'Jewel theme for website',
    'category': 'Website/Theme',
    'version': '17.0',
    'author': 'vmgu',
    'license': 'LGPL-3',
    'depends': ['website'],
    'data': [
        'data/pages/home.xml',
        'data/pages/impact_page.xml',
        'data/pages/lookbook.xml',
        'data/presets.xml',
        'data/pages/press.xml',
        'data/pages/blog.xml',
        'data/pages/about-us.xml',
        'data/pages/lab-grown-diamonds.xml',
        'data/pages/login.xml',
        'data/pages/register.xml',
        'data/pages/wishlist.xml',
        'data/pages/contactus.xml',
        'data/pages/faq.xml',
        'data/pages/service-policy.xml',
        'data/pages/celebrities.xml',
        'data/pages/account.xml',
        'data/pages/product-detail.xml',
        'views/templates.xml',
        'views/footer_template.xml',
        'views/header_template.xml'
    ],
    'views' : [
        'views/footer_template.xml',
        'views/header_template.xml'
    ],
    'assets': {
        'web._assets_primary_variables': [
            'website_sr/static/src/scss/primary_variables.scss',
        ],
        'web.assets_frontend': [
            'website_sr/static/src/scss/style.scss',
        ],
        'web.assets_backend': [
            '/website_sr/static/src/js/script.js',
        ],
    },
}