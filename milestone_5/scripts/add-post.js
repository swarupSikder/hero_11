document.getElementById('post-button').addEventListener('click', function () {
    //feeds-layout
    const parentDiv = document.getElementById('feeds-layout');

    //feeds-layout > feed-item
    const feedItem = document.createElement('div');
    feedItem.classList.add('feed-item');

    //feeds-layout > feed-item > user-layout
    const userLayout = document.createElement('div');
    userLayout.classList.add('user-layout');

    //feeds-layout > feed-item > user-layout > profile-photo
    const profilePhoto = document.createElement('img');
    profilePhoto.classList.add('profile-photo');
    profilePhoto.src = './assets/final_300x300.jpg';

    //feeds-layout > feed-item > user-layout > user-info
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    //user-info > user-name
    const userName = document.createElement('h1');
    userName.innerText = 'Swarup Sikder';
    userName.classList.add('user-name');
    userName.classList.add('font-concert');

    //user-info > user-tag
    const userTag = document.createElement('p');
    userTag.innerText = 'Android Developer';
    userTag.classList.add('user-tag');

    //user-info > post-time
    const postTime = document.createElement('p');
    postTime.innerText = '21 Mar 2025';
    postTime.classList.add('post-time');

    //         <<<
    //userInfo <<< (user-name)+(user-tag)+(post-time)
    //         <<<
    userInfo.appendChild(userName);
    userInfo.appendChild(userTag);
    userInfo.appendChild(postTime);

    //           <<<
    //userLayout <<< (profile-photo)+(user-info)
    //           <<<
    userLayout.appendChild(profilePhoto);
    userLayout.appendChild(userInfo);

    //post-layout
    const postLayout = document.createElement('div');
    postLayout.classList.add('post-layout');




    //>>>>>>>>>>>             <<<<<<<<<<<
    //>>>>>>>>>>> (main task) <<<<<<<<<<<
    //>>>>>>>>>>>             <<<<<<<<<<<
    //post-text
    const postText = document.createElement('p');
    const inputPostText = document.getElementById('input-post-text');
    postText.innerText = inputPostText.value;
    postText.classList.add('post-text');

    //           <<<
    //postLayout <<< (post-text)
    //           <<<
    postLayout.appendChild(postText);





    //         <<<
    //feedItem <<< (user-layout)+(post-layout)
    //         <<<
    feedItem.appendChild(userLayout);
    feedItem.appendChild(postLayout);


    //          <<<
    //parentDiv <<< (feed-item)
    //          <<<
    parentDiv.appendChild(feedItem);
});

