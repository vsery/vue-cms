import * as types from './mutation-types'

const mutations = {
    [types.set_Pageconfig](state, pageConfig) { state.pageConfig = pageConfig },
    [types.set_Mainconfig](state, mainConfig) { state.mainConfig = mainConfig },
    [types.set_Maincontents](state, mainContents) { state.mainContents = mainContents },
    [types.push_Maincontents](state, mainContents) { state.mainContents.push(mainContents) },
    [types.change_Maincontents](state, index, mainContents) { state.mainContents[index] = mainContents },
    [types.set_Mainaction](state, mainAction) { state.mainAction.push(mainAction) },
}

export default mutations
