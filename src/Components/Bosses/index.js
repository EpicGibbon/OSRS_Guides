import React from 'react';
import '../Bosses/style.css'

function Bosses() {

    return (
        <div className="card-container">
        <div className="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="src/Images/General_Graardor.png" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Bosses<i class="material-icons right">more_vert</i></span>
      <p><a href="https://oldschool.runescape.wiki/w/Boss"  target="_blank" >Redirect link to RSWiki</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information for this particular webpage</p>
    </div>
  </div>
  </div>
    )
}

export default Bosses;