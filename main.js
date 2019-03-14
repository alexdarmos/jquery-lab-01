$(() => {
    // $(`#form-container`).toggle(`hide`);

    function getTableNum() {

    } 

// if ($(`div`) != $(`.reserved`) ) {
    $(`.available`).on(`click`, (e) => {
        $(`#form-container`).removeClass(`hide`);
        $(`#form-container`).addClass(`show`);

       let tableNum = (e.target.firstChild.data);
      
            console.log(tableNum);
            $(`#table-number`).text(tableNum);

            let tableNumId = `#table-${tableNum}`;

            $(`#save-button`).on(`click`, () => {
                $(tableNumId).removeClass(`available`);
                $(tableNumId).addClass(`reserved`);
                $(tableNumId).prop(`disabled`,true);
                $(`#form-container`).removeClass(`show`);
                $(`#form-container`).addClass(`hide`);
                
            });

            $(`#exit-button`).on(`click`, () => {
                //reset table id so we don't multiselect
                tableNumId = null;
                $(`#form-container`).removeClass(`show`);
                $(`#form-container`).addClass(`hide`);
            });

            
    });

});