import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9d459530 = () => interopDefault(import('..\\pages\\apptmhsg.vue' /* webpackChunkName: "pages/apptmhsg" */))
const _cff5a4e2 = () => interopDefault(import('..\\pages\\taotaikhoan.vue' /* webpackChunkName: "pages/taotaikhoan" */))
const _41f863a4 = () => interopDefault(import('..\\pages\\thongtintaikhoan.vue' /* webpackChunkName: "pages/thongtintaikhoan" */))
const _3c301fe4 = () => interopDefault(import('..\\pages\\thulao\\68\\admin\\index.vue' /* webpackChunkName: "pages/thulao/68/admin/index" */))
const _1eab49ca = () => interopDefault(import('..\\pages\\thulao\\68\\cdcls\\index.vue' /* webpackChunkName: "pages/thulao/68/cdcls/index" */))
const _431ebaf3 = () => interopDefault(import('..\\pages\\thulao\\68\\congkham\\index.vue' /* webpackChunkName: "pages/thulao/68/congkham/index" */))
const _15d4eea6 = () => interopDefault(import('..\\pages\\thulao\\68\\congkhambh\\index.vue' /* webpackChunkName: "pages/thulao/68/congkhambh/index" */))
const _f9885d08 = () => interopDefault(import('..\\pages\\thulao\\68\\gayme\\index.vue' /* webpackChunkName: "pages/thulao/68/gayme/index" */))
const _bb71be14 = () => interopDefault(import('..\\pages\\thulao\\68\\gaymebh\\index.vue' /* webpackChunkName: "pages/thulao/68/gaymebh/index" */))
const _fe6ea2c6 = () => interopDefault(import('..\\pages\\thulao\\68\\thcls\\index.vue' /* webpackChunkName: "pages/thulao/68/thcls/index" */))
const _701139d7 = () => interopDefault(import('..\\pages\\thulao\\68\\thclsbh\\index.vue' /* webpackChunkName: "pages/thulao/68/thclsbh/index" */))
const _55e837a4 = () => interopDefault(import('..\\pages\\thulao\\68\\thuthuat\\index.vue' /* webpackChunkName: "pages/thulao/68/thuthuat/index" */))
const _7f4561b0 = () => interopDefault(import('..\\pages\\thulao\\68\\thuthuatbh\\index.vue' /* webpackChunkName: "pages/thulao/68/thuthuatbh/index" */))
const _3a5e96de = () => interopDefault(import('..\\pages\\thulao\\68\\tonghop\\index.vue' /* webpackChunkName: "pages/thulao/68/tonghop/index" */))
const _3e3f9591 = () => interopDefault(import('..\\pages\\thulao\\915\\admin\\index.vue' /* webpackChunkName: "pages/thulao/915/admin/index" */))
const _20babf77 = () => interopDefault(import('..\\pages\\thulao\\915\\cdcls\\index.vue' /* webpackChunkName: "pages/thulao/915/cdcls/index" */))
const _04ab68f4 = () => interopDefault(import('..\\pages\\thulao\\915\\clskskdk\\index.vue' /* webpackChunkName: "pages/thulao/915/clskskdk/index" */))
const _082dca26 = () => interopDefault(import('..\\pages\\thulao\\915\\congkham\\index.vue' /* webpackChunkName: "pages/thulao/915/congkham/index" */))
const _6e854f24 = () => interopDefault(import('..\\pages\\thulao\\915\\congkhamkskdk\\index.vue' /* webpackChunkName: "pages/thulao/915/congkhamkskdk/index" */))
const _10e0fe1e = () => interopDefault(import('..\\pages\\thulao\\915\\dieuduonglamhsksk\\index.vue' /* webpackChunkName: "pages/thulao/915/dieuduonglamhsksk/index" */))
const _f56971ae = () => interopDefault(import('..\\pages\\thulao\\915\\gayme\\index.vue' /* webpackChunkName: "pages/thulao/915/gayme/index" */))
const _7fdcba68 = () => interopDefault(import('..\\pages\\thulao\\915\\gaymeksk\\index.vue' /* webpackChunkName: "pages/thulao/915/gaymeksk/index" */))
const _fe7a8ea6 = () => interopDefault(import('..\\pages\\thulao\\915\\ksktd\\index.vue' /* webpackChunkName: "pages/thulao/915/ksktd/index" */))
const _a1d31036 = () => interopDefault(import('..\\pages\\thulao\\915\\ngoaigio\\index.vue' /* webpackChunkName: "pages/thulao/915/ngoaigio/index" */))
const _214dbce6 = () => interopDefault(import('..\\pages\\thulao\\915\\ngoaivien\\index.vue' /* webpackChunkName: "pages/thulao/915/ngoaivien/index" */))
const _b1e21fb4 = () => interopDefault(import('..\\pages\\thulao\\915\\ngoaivienvaonoivien\\index.vue' /* webpackChunkName: "pages/thulao/915/ngoaivienvaonoivien/index" */))
const _fa4fb76c = () => interopDefault(import('..\\pages\\thulao\\915\\thcls\\index.vue' /* webpackChunkName: "pages/thulao/915/thcls/index" */))
const _cbca193e = () => interopDefault(import('..\\pages\\thulao\\915\\thuthuat\\index.vue' /* webpackChunkName: "pages/thulao/915/thuthuat/index" */))
const _415e0539 = () => interopDefault(import('..\\pages\\thulao\\915\\tonghopdv\\index.vue' /* webpackChunkName: "pages/thulao/915/tonghopdv/index" */))
const _2fad6106 = () => interopDefault(import('..\\pages\\thulao\\915\\tonghopksk\\index.vue' /* webpackChunkName: "pages/thulao/915/tonghopksk/index" */))
const _e4206ea2 = () => interopDefault(import('..\\pages\\thulao\\915\\tongkeths\\index.vue' /* webpackChunkName: "pages/thulao/915/tongkeths/index" */))
const _7c493d0a = () => interopDefault(import('..\\pages\\thulao\\benhvien\\admin\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/admin/index" */))
const _b752e93e = () => interopDefault(import('..\\pages\\thulao\\benhvien\\cdcls\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/cdcls/index" */))
const _0397ca65 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\cdpt\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/cdpt/index" */))
const _b5e31596 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\chamsocsaupt\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/chamsocsaupt/index" */))
const _77647dfc = () => interopDefault(import('..\\pages\\thulao\\benhvien\\congkham\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/congkham/index" */))
const _1562e805 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\dieutrinoitru\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/dieutrinoitru/index" */))
const _08e71313 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\gayme\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/gayme/index" */))
const _da676cf2 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\hangbs\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/hangbs/index" */))
const _1e4d2bbb = () => interopDefault(import('..\\pages\\thulao\\benhvien\\ngoaigio\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/ngoaigio/index" */))
const _d623013c = () => interopDefault(import('..\\pages\\thulao\\benhvien\\phauthuat\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/phauthuat/index" */))
const _0673f034 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\thcls\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/thcls/index" */))
const _0951a737 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\thuthuat\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/thuthuat/index" */))
const _023fceb5 = () => interopDefault(import('..\\pages\\thulao\\benhvien\\tonghop\\index.vue' /* webpackChunkName: "pages/thulao/benhvien/tonghop/index" */))
const _0bbc09a3 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\admin\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/admin/index" */))
const _7fcfd00d = () => interopDefault(import('..\\pages\\thulao\\his_pd\\chamsocsaupt\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/chamsocsaupt/index" */))
const _5d5cdbac = () => interopDefault(import('..\\pages\\thulao\\his_pd\\chidinhekipphauthuat\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/chidinhekipphauthuat/index" */))
const _da662fa6 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\dieutrinoitru\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/dieutrinoitru/index" */))
const _547e204b = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopdv\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopdv/index" */))
const _0bcae12e = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopdv_bhyt\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopdv_bhyt/index" */))
const _fedeaf98 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopksk\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopksk/index" */))
const _3cd749d4 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopksk_bsketluan\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopksk_bsketluan/index" */))
const _01c1877a = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopksk_ddketluan\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopksk_ddketluan/index" */))
const _39051639 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopksk_ngoaivien\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopksk_ngoaivien/index" */))
const _32de3ac0 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\tonghopksk_visa\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/tonghopksk_visa/index" */))
const _26341424 = () => interopDefault(import('..\\pages\\thulao\\his_pd\\updatemore\\index.vue' /* webpackChunkName: "pages/thulao/his_pd/updatemore/index" */))
const _5e5bb3f0 = () => interopDefault(import('..\\pages\\thulao\\q7\\admin\\index.vue' /* webpackChunkName: "pages/thulao/q7/admin/index" */))
const _99656024 = () => interopDefault(import('..\\pages\\thulao\\q7\\cdcls\\index.vue' /* webpackChunkName: "pages/thulao/q7/cdcls/index" */))
const _53f15b62 = () => interopDefault(import('..\\pages\\thulao\\q7\\congkham\\index.vue' /* webpackChunkName: "pages/thulao/q7/congkham/index" */))
const _17ddd7a0 = () => interopDefault(import('..\\pages\\thulao\\q7\\gayme\\index.vue' /* webpackChunkName: "pages/thulao/q7/gayme/index" */))
const _156ab4c1 = () => interopDefault(import('..\\pages\\thulao\\q7\\thcls\\index.vue' /* webpackChunkName: "pages/thulao/q7/thcls/index" */))
const _67f47b8a = () => interopDefault(import('..\\pages\\thulao\\q7\\thuthuat\\index.vue' /* webpackChunkName: "pages/thulao/q7/thuthuat/index" */))
const _2e97a402 = () => interopDefault(import('..\\pages\\thulao\\q7\\tonghop\\index.vue' /* webpackChunkName: "pages/thulao/q7/tonghop/index" */))
const _2573477c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/apptmhsg",
    component: _9d459530,
    name: "apptmhsg"
  }, {
    path: "/taotaikhoan",
    component: _cff5a4e2,
    name: "taotaikhoan"
  }, {
    path: "/thongtintaikhoan",
    component: _41f863a4,
    name: "thongtintaikhoan"
  }, {
    path: "/thulao/68/admin",
    component: _3c301fe4,
    name: "thulao-68-admin"
  }, {
    path: "/thulao/68/cdcls",
    component: _1eab49ca,
    name: "thulao-68-cdcls"
  }, {
    path: "/thulao/68/congkham",
    component: _431ebaf3,
    name: "thulao-68-congkham"
  }, {
    path: "/thulao/68/congkhambh",
    component: _15d4eea6,
    name: "thulao-68-congkhambh"
  }, {
    path: "/thulao/68/gayme",
    component: _f9885d08,
    name: "thulao-68-gayme"
  }, {
    path: "/thulao/68/gaymebh",
    component: _bb71be14,
    name: "thulao-68-gaymebh"
  }, {
    path: "/thulao/68/thcls",
    component: _fe6ea2c6,
    name: "thulao-68-thcls"
  }, {
    path: "/thulao/68/thclsbh",
    component: _701139d7,
    name: "thulao-68-thclsbh"
  }, {
    path: "/thulao/68/thuthuat",
    component: _55e837a4,
    name: "thulao-68-thuthuat"
  }, {
    path: "/thulao/68/thuthuatbh",
    component: _7f4561b0,
    name: "thulao-68-thuthuatbh"
  }, {
    path: "/thulao/68/tonghop",
    component: _3a5e96de,
    name: "thulao-68-tonghop"
  }, {
    path: "/thulao/915/admin",
    component: _3e3f9591,
    name: "thulao-915-admin"
  }, {
    path: "/thulao/915/cdcls",
    component: _20babf77,
    name: "thulao-915-cdcls"
  }, {
    path: "/thulao/915/clskskdk",
    component: _04ab68f4,
    name: "thulao-915-clskskdk"
  }, {
    path: "/thulao/915/congkham",
    component: _082dca26,
    name: "thulao-915-congkham"
  }, {
    path: "/thulao/915/congkhamkskdk",
    component: _6e854f24,
    name: "thulao-915-congkhamkskdk"
  }, {
    path: "/thulao/915/dieuduonglamhsksk",
    component: _10e0fe1e,
    name: "thulao-915-dieuduonglamhsksk"
  }, {
    path: "/thulao/915/gayme",
    component: _f56971ae,
    name: "thulao-915-gayme"
  }, {
    path: "/thulao/915/gaymeksk",
    component: _7fdcba68,
    name: "thulao-915-gaymeksk"
  }, {
    path: "/thulao/915/ksktd",
    component: _fe7a8ea6,
    name: "thulao-915-ksktd"
  }, {
    path: "/thulao/915/ngoaigio",
    component: _a1d31036,
    name: "thulao-915-ngoaigio"
  }, {
    path: "/thulao/915/ngoaivien",
    component: _214dbce6,
    name: "thulao-915-ngoaivien"
  }, {
    path: "/thulao/915/ngoaivienvaonoivien",
    component: _b1e21fb4,
    name: "thulao-915-ngoaivienvaonoivien"
  }, {
    path: "/thulao/915/thcls",
    component: _fa4fb76c,
    name: "thulao-915-thcls"
  }, {
    path: "/thulao/915/thuthuat",
    component: _cbca193e,
    name: "thulao-915-thuthuat"
  }, {
    path: "/thulao/915/tonghopdv",
    component: _415e0539,
    name: "thulao-915-tonghopdv"
  }, {
    path: "/thulao/915/tonghopksk",
    component: _2fad6106,
    name: "thulao-915-tonghopksk"
  }, {
    path: "/thulao/915/tongkeths",
    component: _e4206ea2,
    name: "thulao-915-tongkeths"
  }, {
    path: "/thulao/benhvien/admin",
    component: _7c493d0a,
    name: "thulao-benhvien-admin"
  }, {
    path: "/thulao/benhvien/cdcls",
    component: _b752e93e,
    name: "thulao-benhvien-cdcls"
  }, {
    path: "/thulao/benhvien/cdpt",
    component: _0397ca65,
    name: "thulao-benhvien-cdpt"
  }, {
    path: "/thulao/benhvien/chamsocsaupt",
    component: _b5e31596,
    name: "thulao-benhvien-chamsocsaupt"
  }, {
    path: "/thulao/benhvien/congkham",
    component: _77647dfc,
    name: "thulao-benhvien-congkham"
  }, {
    path: "/thulao/benhvien/dieutrinoitru",
    component: _1562e805,
    name: "thulao-benhvien-dieutrinoitru"
  }, {
    path: "/thulao/benhvien/gayme",
    component: _08e71313,
    name: "thulao-benhvien-gayme"
  }, {
    path: "/thulao/benhvien/hangbs",
    component: _da676cf2,
    name: "thulao-benhvien-hangbs"
  }, {
    path: "/thulao/benhvien/ngoaigio",
    component: _1e4d2bbb,
    name: "thulao-benhvien-ngoaigio"
  }, {
    path: "/thulao/benhvien/phauthuat",
    component: _d623013c,
    name: "thulao-benhvien-phauthuat"
  }, {
    path: "/thulao/benhvien/thcls",
    component: _0673f034,
    name: "thulao-benhvien-thcls"
  }, {
    path: "/thulao/benhvien/thuthuat",
    component: _0951a737,
    name: "thulao-benhvien-thuthuat"
  }, {
    path: "/thulao/benhvien/tonghop",
    component: _023fceb5,
    name: "thulao-benhvien-tonghop"
  }, {
    path: "/thulao/his_pd/admin",
    component: _0bbc09a3,
    name: "thulao-his_pd-admin"
  }, {
    path: "/thulao/his_pd/chamsocsaupt",
    component: _7fcfd00d,
    name: "thulao-his_pd-chamsocsaupt"
  }, {
    path: "/thulao/his_pd/chidinhekipphauthuat",
    component: _5d5cdbac,
    name: "thulao-his_pd-chidinhekipphauthuat"
  }, {
    path: "/thulao/his_pd/dieutrinoitru",
    component: _da662fa6,
    name: "thulao-his_pd-dieutrinoitru"
  }, {
    path: "/thulao/his_pd/tonghopdv",
    component: _547e204b,
    name: "thulao-his_pd-tonghopdv"
  }, {
    path: "/thulao/his_pd/tonghopdv_bhyt",
    component: _0bcae12e,
    name: "thulao-his_pd-tonghopdv_bhyt"
  }, {
    path: "/thulao/his_pd/tonghopksk",
    component: _fedeaf98,
    name: "thulao-his_pd-tonghopksk"
  }, {
    path: "/thulao/his_pd/tonghopksk_bsketluan",
    component: _3cd749d4,
    name: "thulao-his_pd-tonghopksk_bsketluan"
  }, {
    path: "/thulao/his_pd/tonghopksk_ddketluan",
    component: _01c1877a,
    name: "thulao-his_pd-tonghopksk_ddketluan"
  }, {
    path: "/thulao/his_pd/tonghopksk_ngoaivien",
    component: _39051639,
    name: "thulao-his_pd-tonghopksk_ngoaivien"
  }, {
    path: "/thulao/his_pd/tonghopksk_visa",
    component: _32de3ac0,
    name: "thulao-his_pd-tonghopksk_visa"
  }, {
    path: "/thulao/his_pd/updatemore",
    component: _26341424,
    name: "thulao-his_pd-updatemore"
  }, {
    path: "/thulao/q7/admin",
    component: _5e5bb3f0,
    name: "thulao-q7-admin"
  }, {
    path: "/thulao/q7/cdcls",
    component: _99656024,
    name: "thulao-q7-cdcls"
  }, {
    path: "/thulao/q7/congkham",
    component: _53f15b62,
    name: "thulao-q7-congkham"
  }, {
    path: "/thulao/q7/gayme",
    component: _17ddd7a0,
    name: "thulao-q7-gayme"
  }, {
    path: "/thulao/q7/thcls",
    component: _156ab4c1,
    name: "thulao-q7-thcls"
  }, {
    path: "/thulao/q7/thuthuat",
    component: _67f47b8a,
    name: "thulao-q7-thuthuat"
  }, {
    path: "/thulao/q7/tonghop",
    component: _2e97a402,
    name: "thulao-q7-tonghop"
  }, {
    path: "/",
    component: _2573477c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
