const {Button, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'Tabris.js rocks!';

  AdMob.createBanner( {                                                                                                                 
          adId: "ca-app-pub-1757158960646404/2448352574",
          isTesting: true,
          overlap: false,
          offsetTopBar: false,
          adSize: 'SMART_BANNER',
          position: AdMob.AD_POSITION.BOTTOM_CENTER,
          bgColor: 'black',
          autoShow:true,
          success: function(){
              textView.text = 'success to create banner';
          },
          error: function(){
              textView.text = 'failed to create banner';
          }

        });

  
});
