
var errorArray = [];


main();
function main(){
    storedSettings = getStoredSettings();
    var myFolder=Folder('C:\\').selectDlg("Select start folder:");

    if (errorArray.length > 0)
    {
        var msg = 'The folowing folders did not process due to missing JPEG folder or incorrect number of files: ';
        for (var i = 0; i < errorArray.length; i++) 
        {
                msg = msg + errorArray[i] + ' ';
        }

        alert(msg);
    }
    return true
};