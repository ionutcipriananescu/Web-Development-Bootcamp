const CONFIG={AUTOTAG_ENDPOINT:{basePath:"https://kulerautotag.adobe.io",api:"/autotag"},BEHANCE_ENDPOINT:{basePath:"https://cc-api-behance.adobe.io/v2",searchApi:"/projects",galleryApi:"/galleries"},CCLIBRARIES_ENDPOINT:{basePath:"https://cc-api-assets.adobe.io",librariesApi:"/libraries",themesApi:"/elements",melvilleBasePath:"https://libraries.adobe.io/api/v1",melvilledomainPath:"https://libraries.adobe.io",metadataApi:"/metadata"},CLIENT_ID:"ColorWeb",CLIENT_ID_ONE_TAP:"ColorWebOneTap",CURATED_ENDPOINT:"https://d2ulm998byv1ft.cloudfront.net/curaredData.json",ENVIRONMENT:"production",FLOODGATE_ENDPOINT:{basePath:"https://p13n.adobe.io/fg",api:"/api/v3/feature",xApiKey:"4d84247c36bd4f63977853eb1e0cb5b7"},GOOGLE_OAUTH:"558362366753-jd4a7h0pi7oo0tdh6rs5okedvqdqredd.apps.googleusercontent.com",KULER_ENDPOINT:{basePath:"https://kuler.adobe.com",api:"/api/v2",tagsPath:"/tags",searchPath:"/search",themePath:"/themes",clientId:"7810788A1CFDC3A717C58F96BC4DD8B4"},ETHOS_ENDPOINT:{basePathForB1:"https://themes.adobe.io",basePathForB2:"https://asset.adobe.io",basePathForB3:"https://themesb3.adobe.io",basePathForSearch:"https://search.adobe.io",basePathForGradient:"https://gradient.adobe.io",api:"/api/v2",tagsPath:"/tags",searchPath:"/search",themePath:"/themes",gradientPath:"/gradient",clientId:"KulerBackendClientId"},IMS_LIB_ENDPOINT:"https://auth.services.adobe.com/imslib/imslib.min.js",IMS_SCOPE:"openid,sao.creative_cloud,gnav,sao.cce_private,creative_cloud,AdobeID,additional_info.roles",IMS_ENV:"prod",INGEST_ENDPOINT:{basePath:"https://cc-api-data.adobe.io/ingest"},INGEST_METADATA:{ENVIRONMENT:"prod",INGEST_TYPE:"dunamis",PLATFORM:"WEB",PROJECT:"color-web-service",SOURCE_NAME:"Adobe Color",VERSION:5,BUILD:"color-v1",ORG_VISITOR_ID:"44FD596D5707FFAC7F000101@AdobeOrg"},STOCK_ENDPOINT:{redirect:"https://stock.adobe.com",contributor:"/contributor",api:"https://stock.adobe.io/Rest/Media/1/Search/Files",productId:"AdobeColor/4.0"},SUPPORTED_LOCALES:["cs","da","de","en","es","fr","it","nl","nb","pl","pt","fi","sv","tr","ru","zh","ja","ko"],UNIVERSAL_SEARCH_PROXY:{basePath:"https://search.adobe.io",similaritySearch:"/imageSearch"},UNIVERSAL_SEARCH_ENDPOINT:{basePath:"https://adobesearch.adobe.io",api:"/universal-search/v2",similaritySearch:"/similarity-search",xProduct:"Color",xProductLocation:"Color Website"},USER_FEEDBACK_ENDPOINT:{basePath:"https://10sbjcgrqa.execute-api.us-east-1.amazonaws.com",api:"/production/feedback",clientId:"9542d93e-b4ba-49ea-8c79-bdf68167cd7b"},UTILITY_NAV:"https://prod.adobeccstatic.com/utilnav/9.1/utilitynav.js",UTILITY_NAV_CSS:"https://prod.adobeccstatic.com/utilnav/9.1/utilitynav.css",UTILITY_NAV_ENV:"prod",VADER_ENDPOINT:{api:"https://t7peykbaei.execute-api.us-east-1.amazonaws.com/prod",serviceId:"color",applicationId:"color_web"},ONETRUST_DOMAIN_ID:"7a5eb705-95ed-4cc4-a11d-0cc5760e93db",TYPEKIT_V1:"https://cctypekit.adobe.io/v1/visual_search/regions",SSR:{basePath:"https://color.adobe.com/"},FRONTEND:{basePath:"https://color.adobe.com/"},ACCESS_PLATFORM_ENDPOINT:{basePath:"https://aps-web.adobe.io/",api:"webapps/access_profile/v3",nglAppId:"AdobeColor1",nglAppVersion:"26.0.1",nglLibRuntimeMode:"NAMED_USER_ONLINE"}},config=function(e){return CONFIG[e]};"undefined"!=typeof module&&module.exports?(module.exports=config,global.config=config):window.config=config;