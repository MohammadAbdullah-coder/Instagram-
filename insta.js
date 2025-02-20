let statusVideo = document.getElementById('statusVideo')
let sourceVideo = document.getElementById('sourceVideo')
let video = document.getElementById('video')
let instaFeed = document.getElementById('instaFeed')
let instaStatusCard = document.getElementById('instaStatusCard')
let userProfileDetails = document.getElementById('userProfileDetails')
let status1 = document.getElementById('status1')
let profileSection = document.getElementById('profileSection')
let instastatuscontainer = document.getElementById('instastatuscontainer')
let userBio = document.getElementById('userBio')
let mainprofile = document.getElementById('mainprofile')
let suggestedSection = document.getElementById('suggestedSection')
let perviousStatus = document.getElementById('perviousStatus')
let hrline = document.getElementById('hrline')
let postReelSavedTag = document.getElementById('postReelSavedTag')
let postPhotos = document.getElementById('postPhotos')
let leftSideMenu = document.getElementById('leftSideMenu')
let bgContainer = document.getElementById('bgContainer')
let isprofileVisible = false;
profileSection.addEventListener("click",function(event){

   profile()
function profile(){
    if(!isprofileVisible ){

    userBio.innerHTML = ""
    perviousStatus.innerHTML = ""
    hrline.innerHTML = ""
    postReelSavedTag.innerHTML=""
    postPhotos.innerHTML = ""
    status1.classList.add('hidden')
    instaFeed.classList.add('hidden')
    suggestedSection.classList.add('hidden')
    let profileImage = document.createElement('img')
    profileImage.src = "./New folder/abbuFeed.png"
    profileImage.classList.add('main-profile')
    userBio.appendChild(profileImage)
    userBio.classList.add('userBio')

    let divContainer = document.createElement('div')
    
    userBio.appendChild(divContainer)

    let divContainer1 = document.createElement('div')
    divContainer1.classList.add('alignitem')
    divContainer.appendChild(divContainer1)

    let heading = document.createElement('h1')
    heading.textContent = "mohammad_a_b_d_u_l_l_a"
    heading.classList.add('main-heading')
    divContainer1.appendChild(heading)

    let button1 = document.createElement('button')
    button1.classList.add('btn1')
    button1.textContent = "Edit Profile"
    divContainer1.appendChild(button1)

    let button2 = document.createElement('button')
    button2.classList.add('btn2')
    button2.textContent = "View archice"
    divContainer1.appendChild(button2)

    let divContainer2 = document.createElement('div')
    divContainer2.classList.add('d-flex','followers')
    divContainer.appendChild(divContainer2)

    let posttag = document.createElement('p')
    posttag.textContent = "100 posts"
    posttag.classList.add('postag')
    divContainer2.appendChild(posttag)

    let followerstag = document.createElement('p')
    followerstag .textContent = "900 followers"
    followerstag .classList.add('postag')
    divContainer2.appendChild(followerstag )
    
    let followingtag= document.createElement('p')
    followingtag.textContent = "10 following"
    followingtag.classList.add('postag')
    divContainer2.appendChild(followingtag)

     //--------------------status container---------------------------------

    // let perviousStatus = document.createElement('div')
    // userProfileDetails.appendChild(perviousStatus)

    let divContainer3 = document.createElement('div')
    divContainer3.classList.add('status-container')
    perviousStatus.appendChild(divContainer3)

    let highlight1 = document.createElement('div')
    highlight1.classList.add('mr-5')
    divContainer3.appendChild(highlight1)

    let image1 = document.createElement('img')
    image1.src = "./New folder/hyderbad.png"
    image1.classList.add('previous-status')
    highlight1.appendChild(image1)

    let highlight = document.createElement('p')
    highlight.textContent = "Hyderbad"
    highlight.classList.add('text-white')
    highlight1.appendChild(highlight)


    //-----------------------------------------------------
    let highlight2 = document.createElement('div')
    highlight2.classList.add('mr-5')
    divContainer3.appendChild(highlight2)

    let image2 = document.createElement('img')
    image2.src = "./New folder/taj.png"
    image2.classList.add('previous-status')
    highlight2.appendChild(image2)

    let agar = document.createElement('p')
    agar.textContent = "Agar"
    agar.classList.add('text-white','text-center')
    highlight2.appendChild(agar)

     //-----------------------------------------------------

    let highlight3 = document.createElement('div')
    highlight3.classList.add('mr-5')
   
    divContainer3.appendChild(highlight3)

    let image3 = document.createElement('img')
    image3.src = "./New folder/chatt.png"
    image3.classList.add('previous-status')
    highlight3.appendChild(image3)

    let chattisgarh = document.createElement('p')
    chattisgarh.textContent = "Chattisgarh"
    chattisgarh.classList.add('text-white')
    highlight3.appendChild(chattisgarh)

    //-----------------------------------------------------

    let highlight4 = document.createElement('div')
    highlight4.classList.add('mr-5')
    divContainer3.appendChild(highlight4)

    let image4 = document.createElement('img')
    image4.src = "./New folder/cafe.png"
    image4.classList.add('previous-status')
    highlight4.appendChild(image4)

    let cafe = document.createElement('p')
    cafe.textContent = "Cafe"
    cafe.classList.add('text-white','text-center')
    highlight4.appendChild(cafe)


    //-----------------------------------------------------


    let highlight5 = document.createElement('div')
    highlight5.classList.add('mr-5')
    divContainer3.appendChild(highlight5)

    let image5 = document.createElement('img')
    image5.src = "./New folder/eiffle.png"
    image5.classList.add('previous-status')
    highlight5.appendChild(image5)

    let Eiffel= document.createElement('p')
    Eiffel.textContent = "Eiffel Tower"
    Eiffel.classList.add('text-white')
    highlight5.appendChild(Eiffel)

    //-----------------------------------------------------

     //----------------------Horizontal Line-------------------------------
    hrline.classList.add('hrline')
    userProfileDetails.appendChild(hrline)
    
     //---------------------postReelSavedTag--------------------------------
     userProfileDetails.appendChild(postReelSavedTag)

     let unorderList = document.createElement('ul')
     unorderList.classList.add('post-flex')
     postReelSavedTag.appendChild(unorderList)

    let post = document.createElement('li')
    post.classList.add('post')
    post.textContent = "POST"
    unorderList.appendChild(post)

    let reel = document.createElement('li')
    reel.classList.add('post')
    reel.textContent = "REEL"
    unorderList.appendChild(reel)

    let saved = document.createElement('li')
    saved.classList.add('post')
    saved.textContent = "SAVED"
    unorderList.appendChild(saved)

    let tagged = document.createElement('li')
    tagged.classList.add('post')
    tagged.textContent = "TAGGED"
    unorderList.appendChild(tagged)

      //---------------------postPhotos--------------------------------

      userProfileDetails.appendChild(postPhotos)

      let threeImages = document.createElement('div')
      threeImages.classList.add('threeimage')
      postReelSavedTag.appendChild(threeImages)

      let img1 = document.createElement('img')
      img1.classList.add('post-photo')
      img1.src = "./New folder/postphoto1.png"
      threeImages.appendChild(img1)

      let img2 = document.createElement('img')
      img2.classList.add('post-photo')
      img2.src = "./New folder/postphoto2.png"
      threeImages.appendChild(img2)

      let img3 = document.createElement('img')
      img3.classList.add('post-photo')
      img3.src = "./New folder/postphoto3.png"
      threeImages.appendChild(img3)

      let threeImages1 = document.createElement('div')
      threeImages1.classList.add('threeimage')
      postReelSavedTag.appendChild(threeImages1)

      let img4 = document.createElement('img')
      img4.classList.add('post-photo')
      img4.src = "./New folder/postphoto4.png"
      threeImages1.appendChild(img4)

      let img5 = document.createElement('img')
      img5.classList.add('post-photo')
      img5.src = "./New folder/postphoto5.png"
      threeImages1.appendChild(img5)

      let img6 = document.createElement('img')
      img6.classList.add('post-photo')
      img6.src = "./New folder/postphoto6.png"
      threeImages1.appendChild(img6)


      let threeImages2 = document.createElement('div')
      threeImages2.classList.add('threeimage')
      postReelSavedTag.appendChild(threeImages2)

      let img7 = document.createElement('img')
      img7.classList.add('post-photo')
      img7.src = "./New folder/postphoto7.png"
      threeImages2.appendChild(img7)

      let img8 = document.createElement('img')
      img8.classList.add('post-photo')
      img8.src = "./New folder/postphoto8.png"
      threeImages2.appendChild(img8)

      let img9 = document.createElement('img')
      img9.classList.add('post-photo')
      img9.src = "./New folder/postphoto9.png"
      threeImages2.appendChild(img9)


    isprofileVisible = true

    }else{

        status1.classList.remove('hidden')
        instaFeed.classList.remove('hidden')
        suggestedSection.classList.remove('hidden')
        userBio.innerHTML=" " //-------------------It will hide the all bio_user----------------------------------
        hrline.innerHTML = ""
    
        postReelSavedTag.innerHTML = ""
        postPhotos.innerHTML = ""

        perviousStatus.innerHTML= "" //-------------------It will hide the all perviousStatus----------------------------------
        isprofileVisible = false
    }

}

}) 

let homeSection = document.getElementById('homeSection')
homeSection.addEventListener('click',function(){

    status1.classList.remove('hidden')
    instaFeed.classList.remove('hidden')
    suggestedSection.classList.remove('hidden')
    hrline.classList.add('hidden')
    userBio.innerHTML=""
    perviousStatus.innerHTML= ""
    postReelSavedTag.innerHTML = ""
    hrline.innerHTML = ""
    postPhotos.innerHTML = ""
})
        


        
   
   




































// document.addEventListener("DOMContentLoaded", function() {

//     let statusCheck = document.getElementById('statusCheck')

//         statusCheck.addEventListener('click',function(){ 
//         let statusVideo = document.getElementById('statusVideo')
//         let sourceVideo = document.getElementById('sourceVideo')
//         let video = document.getElementById('video')
//         let instaFeed = document.getElementById('instaFeed')
//         let instaStatusCard = document.getElementById('instaStatusCard')
//         let userProfileDetails = document.getElementById('userProfileDetails')
        

//         statusVideo.classList.toggle('status-video')
//         instaFeed.classList.toggle('hidden')
//         userProfileDetails.classList.toggle('hidden')
        
//         })

//     let profileSection = document.getElementById('profileSection')
        
//         profileSection.addEventListener('click',function(){
//             let status1 = document.getElementById('status1')
//             let userProfileDetails = document.getElementById('userProfileDetails')

            
//             status1.classList.toggle('hidden')
//             instaFeed.classList.toggle('hidden')
            
//         })
    
   
// })



 // let divContainer = document.getElementById('userProfileAccount');
    // let profileSection = document.getElementById('profileSection')
  
    
    

    // profileSection.addEventListener('click',function(){
    //     let bgContainer2 = document.getElementById('bgContainer2')
    //     let instastatucontainer = document.getElementById('instastatuscontainer')
    //     
    //     let profileContainer = document.getElementById('profileContainer')
        
    //     suggestedSection.classList.toggle('hidden')
       
    //     instastatucontainer.classList.toggle('hidden')
    //     bgContainer2.classList.add('bg-container2')
        
    // })

    
    // let statusCheck = document.getElementById('statusCheck')
    // statusCheck.addEventListener('click',function(){
    //     let instastatucontainer = document.getElementById('instastatuscontainer')
    //     let statusSection = document.getElementById('statusSection')
    //     let statusvideo = document.createElement('video')
    //     statusvideo.setAttribute('controls','width:200px','height:300px')
    //     statusSection.appendChild(statusvideo)
    //     let source = document.createComment('source')
        
    //     source.setAttribute('src','./New folder/install-video.mp4')
    //     statusvideo.appendChild(source)
        





    //     statusSection.style.Color = 'green'
    //     statusSection.textContent = "HI"
    //     statusSection.style.height = '100vh'


// })
