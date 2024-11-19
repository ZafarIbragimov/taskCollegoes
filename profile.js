window.onload = function() {
     const user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user) {
         document.getElementById('userInfo').innerText = `${user.firstname} ${user.lastname}`;
        
         showUserPhotos(user);
    } else {
        alert('No user logged in!');
        window.location.href = 'index.html';  
    }
};


 

 function showUserPhotos(user) {
    const photosContainer = document.getElementById('photosContainer');
    photosContainer.innerHTML = '';   
    
    user.photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = photo.url;
        card.appendChild(img);
        
        const likes = document.createElement('p');
        likes.innerText = `Likes: ${photo.numberOfLikes}`;
        card.appendChild(likes);
        
         const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() {
            removePhoto(user, index);
        };
        card.appendChild(removeButton);
        
        photosContainer.appendChild(card);
    });
}

 function removePhoto(user, photoIndex) {
     user.photos.splice(photoIndex, 1);

     sessionStorage.setItem('user', JSON.stringify(user));

     showUserPhotos(user);  
}


const  addImage = ()=>{
    //ulanadigan page ni qo'shiladi Tohirjon taski
    if(window.location.href="................................."){
        alert('suggestfull')
    }else{
        alert('error')
    }
}