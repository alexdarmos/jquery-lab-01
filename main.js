$(() => {
    //click listener for available tables
    $(`.available`).on(`click`, (e) => {
        //removes the hidden class when table clicked
        $(`#form-container`).removeClass(`hide`);
        //adds show class to show form
        $(`#form-container`).addClass(`show`);
        //grab select table's number
       let tableNum = (e.target.firstChild.data);
      
        //set the table in the form to selected number
        $(`#table-number`).text(tableNum);

        //create the selected table ID for the save button
        let tableNumId = `#table-${tableNum}`;

        //save button event listener
        $(`#save-button`).on(`click`, () => {
            $(tableNumId).removeClass(`available`);
            $(tableNumId).addClass(`reserved`);
            $(tableNumId).prop(`disabled`,true);
            $(`#form-container`).removeClass(`show`);
            $(`#form-container`).addClass(`hide`);
                
            });
        //exit button event listener
        $(`#exit-button`).on(`click`, () => {
            //reset table id so we don't multiselect
            tableNumId = null;
            $(`#form-container`).removeClass(`show`);
            $(`#form-container`).addClass(`hide`);
            //clear form fields if filled in
            $(`#name`).val("");
            $(`#phone-number`).val("");
            $(`#party-size`).val("");
            });    
    });
});