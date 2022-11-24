import Journal from './Journal'
function Feed({list = []}){
    if (list.length === 0) {
        return <div className="merge-col">목록이 없습니다</div>
      }
    return(
        <div className="feed">
            <div id="eachJournal">
                {Journal}
            </div>
        </div>
    )
}

export default Feed


