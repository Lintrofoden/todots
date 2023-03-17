import classes from './Trello.module.css'
import {useSortable, defaultAnimateLayoutChanges} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities';
import {IColumn} from '../../redux/Interfaces'
const Item = ({id, title, listOfDeals}: IColumn) =>{

    function animateLayoutChanges(args: any) {
        const {isSorting, wasSorting} = args;
      
        if (isSorting|| wasSorting) {
          return defaultAnimateLayoutChanges(args);
        }
      
        return true;
      }

    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform
    } = useSortable({id: id})

    // const {
    //     transition,
    //   } = useSortable({
    //     id: id,
    //     transition: {
    //       duration: 150, // milliseconds
    //       easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    //     },
    //   });

    

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    }

    return(
        <div style={style} className={classes.item} ref={setNodeRef} {...attributes} {...listeners}>
            <span>
                {title}
            </span>
            <div>
                {listOfDeals.map((item) => <div key={item.id}>{item.title}</div>)}
            </div>
        </div>
    )
}

export default Item