import "./Cards.scss";
import CategoryBtns from "./CategoryBtns/CategoryBtns";
import Users from "./Users/Users";


export default function Cards({setData,data, obj}) {


  const filterBtns = ['All', `O'zbek`, 'Jahon', 'Diniy']

  return (
    <div>
      <section className="category">
        <div className="container">
          <div className="category__info">
            <h3 className="category__title mb-3">Asosiy kategoriyalar</h3>
            <ul className=" category__filter__list p-0 d-flex justify-content-center list-unstyled">
              {filterBtns.map((item, i) =>{
                return  <CategoryBtns
                 data={item}
                 obj={obj} 
                 setData={setData} 
                 key={i}
                />
              })}
            </ul>
          </div>

          <ul className="m-0 category__data__list d-flex flex-wrap justify-content-center p-0 list-unstyled">
            {data.map((item, i) =>{
              return <Users key={i} item={item}/>
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
