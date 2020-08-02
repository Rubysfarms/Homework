import React from 'react';
import './Groups.css';
export const Groups = () => {
    return (
        <div className="filmsNavigation">
            <div className="filmsGroups">
                <button className='filmGroup'><div className='groupName'>Trending</div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='groupName'>Top Rated</div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='groupName'>New Arrivals</div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='groupName'>Trailers</div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='groupName'>Coming Soon</div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='groupName'>Genre</div><div className='underlineButton'></div></button>           
            </div>            
            <div>
                <button className='filmGroup'><div className='viewButton' style={{backgroundImage: 'url(./view-grid.png)'}}></div><div className='underlineButton'></div></button>
                <button className='filmGroup'><div className='viewButton' style={{backgroundImage: 'url(./lines.png)'}}></div><div className='underlineButton'></div></button>
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                {/* Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            </div>
            <div className='underlineFilmsElem'></div>
        </div>
    );
  }