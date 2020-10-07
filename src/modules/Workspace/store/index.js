
import { sleep } from '@/utils/request'
import { MUTATION } from "./mutation-types"

const WorkspaceModule = {
  namespaced: true,
  state: {
    workspaceList: [],
  },
  getters: {
    workspaceList: state => state.workspaceList,
  },
  actions: {
    GetWorkspaceList: async function ({
      commit
    }, params) {
      // Mock data
      const result = [1,2,3,4,5]
      await sleep(1000)
      console.log('🌶')
      commit(MUTATION.SET_WORKSPACE_LIST, result)
      return result
    },
  },
  mutations: {
    [MUTATION.SET_WORKSPACE_LIST]: (state, workspaceList) => {
      state.workspaceList = workspaceList
    }
  },
  getAction (name) {
    return `Workspace/${Object.keys(this.actions)[Object.keys(this.actions).indexOf(name)]}`
  }
}

export default WorkspaceModule
