function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}
const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(url){
    console.log(`Processing ${url}`);
    download(url2,function(url){
        console.log(`Processing ${url}`);
        // download(url3,function(url){
        //     console.log(`Processing ${url}`);
        // });
    });
});