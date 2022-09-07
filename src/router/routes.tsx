import TransitionGroupExample from "../component/TransitionGroup/TransitionGroupExample";
import CSSTransitionLoaderExample from "../component/CSSTransitionExample/CSSTransitionLoaderExample";
import LoaderExample from "../component/FirstExample/LoaderExample";
import SwitchTransitionExample, {
    SwitchTransitionExampleCSSTransitionStyles, SwitchTransitionExampleCSSTransitionWrong,
    SwitchTransitionExampleTransition
} from "../component/SwitchTransition/SwitchTransitionExample";
import SwitchTransitionExampleCSSTransitionClasses from "../component/SwitchTransition/SwitchTransitionExample";
import FanList from "../examples/FanList/FanList";
import BubbleLoading from "../examples/BubleLoading/BubbleLoading";

export const publicRoutes= [
    {path: '/',element: (<TransitionGroupExample/>),linkName:'List'},
    {path: '/loader',element:(<CSSTransitionLoaderExample/>),linkName:'Loader'},
    {path: '/first',element:(<LoaderExample/>),linkName:'Basic Loader'},
    {path: '/st-CSS-classes',element:(<SwitchTransitionExampleCSSTransitionClasses/>),linkName:'st-CSS-classes'},
    {path: '/st-CSS-styles',element:(<SwitchTransitionExampleCSSTransitionStyles/>),linkName:'st-CSS-styles'},
    {path: '/transition',element:(<SwitchTransitionExampleTransition/>),linkName:'transition'},
    {path: '/wrong',element:(<SwitchTransitionExampleCSSTransitionWrong/>),linkName:'wrong'},
    {path: '/fan-list',element: (<FanList/>), linkName: 'Fan List'},
    {path: '/bubble',element: (<BubbleLoading/>), linkName: 'Bubble Loading'},
    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
