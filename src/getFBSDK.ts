import secrets from './secrets';

(<any>window).fbAsyncInit = ()=> {
    FB.init({
      appId            : secrets.facebookAppId,
      //autoLogAppEvents : true,
      xfbml            : false,
      version          : 'v2.11'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=2049447601956492&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));