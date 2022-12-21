import React from "react";
import { useLocation } from "react-router-dom";
import ListJob from '../components/Job/listjob'
import Tree from '../components/Tree/tree'
export default function Matching(){
    const {state } = useLocation()

    class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false };
        }
      
        static getDerivedStateFromError() {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
        }
      
        componentDidCatch(error, errorInfo) {
          // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
        }
      
        render() {
          if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
      
          return this.props.children; 
        }
      }
    return(
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-4 my-10">
            <ErrorBoundary>
            <Tree datas={state} />
            <ListJob data={state}/>

            </ErrorBoundary>
        </div>

    )
}