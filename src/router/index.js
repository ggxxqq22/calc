import Vue from 'vue'
import VueRouter from 'vue-router'
import Server from '@/components/Server/Home.vue'
import Home from '@/components/Server/HomePage.vue'
import Main from '@/components/Server/HomeMain.vue'
import All from '@/components/Server/HomeAll.vue'
import Login from '@/components/Server/Login.vue'
import Log from '@/components/Server/Log.vue'
import User from '@/components/Server/User.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/dataset/page' },
    {
      path: '/calc',
      component: () => import('@/components/Calc.vue'),
      children: [
        { path: '/', redirect: 'homepage' },
        { path: 'kmeans', component: () => import('@/components/Kmeans.vue') },
        {
          path: 'decisionTree',
          component: () => import('@/components/DecisionTree.vue')
        },
        {
          path: 'randomForest',
          component: () => import('@/components/RandomForest.vue')
        },
        { path: 'svm', component: () => import('@/components/SVM.vue') },
        { path: 'svr', component: () => import('@/components/SVR.vue') },
        {
          path: 'linearRegression',
          component: () => import('@/components/LinearRegression.vue')
        },
        {
          path: 'logisticRegression',
          component: () => import('@/components/LogisticRegression.vue')
        },
        { path: 'pca', component: () => import('@/components/pca.vue') },
        { path: 'TSNE', component: () => import('@/components/TSNE.vue') },
        { path: 'Ttest', component: () => import('@/components/Ttest.vue') },
        {
          path: 'ploydata',
          component: () => import('@/components/PloyData.vue')
        },
        {
          path: 'wordCloud',
          component: () => import('@/components/WordCloud.vue')
        },
        {
          path: 'pdf2word',
          component: () => import('@/components/PDF2Word.vue')
        },
        {
          path: 'homepage',
          component: () => import('@/components/HomePage.vue')
        }
      ]
    },
    {
      path: '/server',
      component: Server,
      redirect: '/server/data',
      children: [
        {
          path: 'data',
          component: Home,
          redirect: '/server/data/main',
          children: [
            { path: 'main', component: Main },
            { path: 'all', component: All }
          ]
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'useradd',
          component: User
        },
        {
          path: 'log',
          component: Log
        }
      ]
    },
    {
      path: '/qs',
      component: () => import('@/views/QS_back/index.vue'),
      children: [
        { path: 'edit', component: () => import('@/views/QS_back/edit.vue') },
        { path: 'page', component: () => import('@/views/QS_front/page.vue') }
      ]
    },
    {
      path: '/dataset',
      component: () => import('@/views/Dataset/index.vue'),
      children: [
        { path: 'home', component: () => import('@/views/Dataset/home.vue') },
        { path: 'pub', component: () => import('@/views/Dataset/pub.vue')},
        { path: 'page', component: () => import('@/views/Dataset/page.vue')}
      ]
    }
  ]
})

export default router
