
// action = {
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては…'
// }
//  # befor
//  state = []
//  # after
//  state = [
//   {
//     id: 1,
//     title:'2020東京オリンピックのお知らせ',
//     body:'2020年に東京でオリンピックを開催します！つきましては…'
//   }    
//  ]

//  # befor
//  state = [
//      {id: 1, title:'タイトル１', body:'ボディー１'},
//      {id: 2, title:'タイトル２', body:'ボディー２'},
//      {id: 3, title:'タイトル３', body:'ボディー３'},
//  ]

//  # after
//  state = [
//      {id: 1, title:'タイトル１', body:'ボディー１'},
//      {id: 2, title:'タイトル２', body:'ボディー２'},
//      {id: 3, title:'タイトル３', body:'ボディー３'},
//      {
//           id: 4,
//           title:'2020東京オリンピックのお知らせ',
//           body:'2020年に東京でオリンピックを開催します！つきましては…'
//   　　},
//  ]

import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions'

const events = (state = [], action) => {
    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length -1].id + 1
            // id: id は省略してidと記載できる
            return [...state, { id, ...event}]
        case DELETE_EVENT:
            return state.filter(event => {
                return event.id !== action.id
            })
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default events