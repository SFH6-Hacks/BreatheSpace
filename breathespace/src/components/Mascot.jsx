import Spline from '@splinetool/react-spline';

function Mascot() {
    function onLoad(spline) {
        spline.setBackgroundColor('rgba(0,0,0,0)');
    }
    return (
        <div className="masc w-full h-full">
            <Spline scene="https://prod.spline.design/7Xj8E0YF-bgLwwzt/scene.splinecode" onLoad={onLoad}/>
        </div>
    );
}
export default Mascot;