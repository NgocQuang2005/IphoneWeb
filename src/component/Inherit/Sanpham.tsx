type IProduct = {
    name: string;
    thumb: string;
    price: number;
    promoPrice?: number;
    apple?: string;
}

const SingleProduct = ({name, thumb, price,apple, promoPrice=0}: IProduct) => {
  return (
    <div className="item" style={{width:200,position:"relative"}}>
        <a href={apple}>
            <div className="thumb">
                <img width={'100%'}  src={thumb} alt={name} />
            </div>
            <p className="text-white">{name}</p>
            <div>
                {
                    promoPrice  > 0 ? (
                        <>
                            <strong className="mr-1 text-red-400">{promoPrice}đ</strong>
                            <del>{price}đ</del>
                        </>
                    )
                    : (
                        <strong>{price}đ</strong>
                    )
                }
            </div>
                {/* {
                promoPrice && promoPrice !== price && (
                        <>
                        <div style={{position:"absolute",top:0,right:0,background:"#FF8080",padding:"3px 5px",borderRadius:5}}>{(100-Math.round(promoPrice*100/price))} %</div>
                        </>
                    )
                } */}
                {
                    ( promoPrice && promoPrice !== price) ? (
                        <>
                        <div style={{position:"absolute",top:0,right:0,background:"#FF8080",padding:"3px 5px",borderRadius:5}}>{(100-Math.round(promoPrice*100/price))} %</div>
                        </>
                    ):("")
                }
        </a>
    </div>
  )
}
export default SingleProduct