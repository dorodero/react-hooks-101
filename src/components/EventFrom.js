import React, { useContext, useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext';

const EventFrom = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const addEvent = e => {
      e.preventDefault()
      // dispatch(action)
      // action = {
      //  type:'CREATE_EVENT',
      //  title,
      //  boty
      // }
      dispatch({
        type: CREATE_EVENT,
        title,
        body
      })
      setTitle('')
      setBody('')
    }
    const deleteAllEvents = e => {
      e.preventDefault()
      const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
      if (result) {
        dispatch({
          type: DELETE_ALL_EVENTS
        })
      }
    }
  
    const unCreateble = title ==='' || body ===''
  
    return (
        <>
            <h4>イベントフォーム作成</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreateble}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventFrom