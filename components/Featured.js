import React from 'react';

function Featured() {
    return (
        <section>
            <h1>WELCOME TO STREAMLIST</h1>
            <p>Your personal hub for movies and shows</p>
            <button>Browse Titles</button>
            <button>My Watchlist</button>

            <h2>Featured</h2>
            <div className='cards'>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>
        </section>

    );
}

export default Featured;