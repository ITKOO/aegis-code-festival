
Kakao.init('e73421d675d434ef078e0d503d63dfcf');

Kakao.Link.createDefaultButton({
  container: '#kakao-link-btn', 
  objectType: 'feed',
  content: {  
    title: 'Aegis 코딩 페스티벌', 
    description: '#단국대 #dku #Aegis #이코페',  
    imageUrl: 'https://dk-aegis.org/xe/files/attach/images/68898/61781dec90fad1762fd4f8b8036c99b8.png', 
    link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com'
    }
  }
});