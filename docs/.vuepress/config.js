module.exports = {
    title: '汪的码场', // 网站的标题
    description: 'Talk is cheap,show your code!', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
        ['link', {rel: 'icon', href: '/pic/dh_logo.jpg'}] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        logo: '/pic/dh_logo.jpg',
        repo: 'vuejs/vuepress',
        editLinks: true,
        // sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Java', link: '/Java/io'},
            {text: 'Mysql', link: '/Mysql/cluster'},
            {text: 'About', link: '/AboutMe/'}
        ],
        // 侧边栏组
        sidebar: [
            {
                title: "Java",
                collapsable: true,
                children: [
                    ['/Java/io', "io"],
                    ['/Java/Spring', 'spring的使用'],
                    ['/Java/SpringBoot', 'SpringBoot的使用'],
                ]
            },
            {
                title: 'Mysql',
                collapsable: true,
                children: [
                    ['/Mysql/cluster', "cluster"],
                ]
            }
        ],
        sidebarDepth: 0,
    }
};
