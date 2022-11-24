function Journal(date, content){
    return(
        <div className="journal">
            <div id="date">{date}</div>
            <div id="journalcontent">{content}</div>
        </div>
    )
}

export default Journal