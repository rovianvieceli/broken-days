import React from 'react';

export default class ActionButton extends React.Component {
  render() {
    return (
      <div class="fixed-action-btn click-to-toggle">
        <a href="!#" class="btn-floating btn-large pink waves-effect waves-light">
          <i class="large material-icons">add</i>
        </a>

        <ul>
          <li>
            <a href="!#" class="btn-floating red"><i class="material-icons">note_add</i></a>
            <a href="!#" class="btn-floating fab-tip">Add a note</a>
          </li>

          <li>
            <a href="!#" class="btn-floating yellow darken-1"><i class="material-icons">add_a_photo</i></a>
            <a href="!#" class="btn-floating fab-tip">Add a photo</a>
          </li>

          <li>
            <a href="!#" class="btn-floating green"><i class="material-icons">alarm_add</i></a>
            <a href="!#" class="btn-floating fab-tip">Add an alarm</a>
          </li>

          <li>
            <a href="!#" class="btn-floating blue"><i class="material-icons">vpn_key</i></a>
            <a href="!#" class="btn-floating fab-tip">Add a master password</a>
          </li>
        </ul>
      </div>
    )
  }
}