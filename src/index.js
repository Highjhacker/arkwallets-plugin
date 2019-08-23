module.exports = {
    register () {
        this.routes = [
            {
                path: '/arkwallets',
                name: 'arkwallets',
                component: 'ArkWallets'
            }
        ]

        this.menuItems = [
            {
                routeName: 'arkwallets',
                title: 'Wallets Monitoring'
            }
        ]
    },

    getComponentPaths () {
        return this.routes.reduce((all, route) => {
            return {
                ...all,
                [route.component]: `pages/${route.component}.js`
            }
        }, {})
    },

    getRoutes () {
        return this.routes
    },

    getMenuItems () {
        return this.menuItems
    }
}