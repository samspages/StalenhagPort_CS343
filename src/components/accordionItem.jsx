export default function accordionItem(){
    const data = [
        {
          description: 'Description 1',
          content:
                 `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
                 Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
                 Phasellus sed purus ut nunc ultrices fermentum 
                 feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
                 Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
                 sagittis ullamcorper.`,
        },
        {
          description: 'Description 2',
          content:
                 `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
                 Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
                 Phasellus sed purus ut nunc ultrices fermentum 
                 feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
                 Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
                 sagittis ullamcorper.`,
        },
        {
          description: 'Description 3',
          content:
                 `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
                 Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
                 Phasellus sed purus ut nunc ultrices fermentum 
                 feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
                 Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
                 sagittis ullamcorper.`,
        }
     ]

     return data.map((item, i) =>(
        <div className='item'>
           <div className='title' onClick={() => toggle(i)}>
              <h2>{item.description}</h2>
              <span>{selected === i ? '-' : '+'}</span>
           </div>
           <div className={selected === i ? 'content show' : 'content'}>
              {item.content}
           </div>
        </div>
     ))
}