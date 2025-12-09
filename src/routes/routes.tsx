

export const paths = [
    {
        label: 'catalogo',
        value: 'catalogo',
        parent: null,
        path: '/catalogo',
        visible: true
    },
    {
        label: 'login',
        value: 'login',
        parent: null,
        path: '/login',
        visible: true
    },

    // ------------------ childs -------------------
    {
        label:'filmes',
        value: 'catalogo-filmes',
        parent:'catalogo',
        path: '/catalogo/filmes',
        visible: true
    },
    {
        label:'series',
        value: 'catalogo-series',
        parent:'catalogo',
        path: '/catalogo/series',
        visible: true
    },
]