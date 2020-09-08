const LayoutWorkspace = () => import('@/components/Layout/LayoutWorkspace')
const LayoutSvg = () => import('@/components/Layout/LayoutSvg')

function importModule (filePath) {
  return () => import(/* webpackChunkName: "[index].page" */ `@/modules/${filePath}`)
}


function getSvgPageList() {
  const svgFileList = require.context('@/modules/SvgDemo/pages', true, /\.vue$/)
  return svgFileList.keys().map((path) => {
    path = path.replace(/(\.\/|\.vue)/g, '')
    return {
      path: `/svg-demo/${path}`,
      name: `/svg-demo/${path}`,
      component: importModule(`SvgDemo/pages/${path}`),
      meta: {
        title: 'Svg demo',
      }
    }
  })
}

const routes = [
  {
    path: '/',
    title: 'Dashboard',
    icon: 'tachometer-alt'
  },
  ...getSvgPageList(),
  {
    path: '/process-mining',
    component: LayoutWorkspace,
    name: 'Workspace',
    redirect: 'noredirect',
    meta: {
      title: '工作空间管理'
    },
    children: [
      {
        path: 'workspaces',
        name: 'workspacesList',
        component: importModule('Workspace/pages/workspacesList'),
        meta: {
          title: '工作空间列表',
          permissionName: ''
        }
      },
      // {
      //   path: 'workspaces/new',
      //   name: 'workspacesNew',
      //   component: importModule('Workspace/pages/workspacesNew'),
      //   meta: {
      //     title: '工作空间创建',
      //     icon: 'table',
      //     permissionName: ''
      //   }
      // },
      {
        path: 'workspaces/:workspacesId/edit',
        name: 'workspacesEdit',
        component: importModule('Workspace/pages/workspacesEdit'),
        meta: {
          title: '工作空间编辑',
          icon: 'table',
          permissionName: ''
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default routes
