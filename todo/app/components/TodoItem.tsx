type TodoItemprops = {
    id:string
    title:string
    complete:Boolean
}
export function TodoItem({id,title,complete}:TodoItemprops){
    return <li className="flexx gap-1 items-start">
        <input id={id} type="checkbox" className="cursor-pointer peer"/>
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}