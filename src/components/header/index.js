import React from "react";
import { connect } from "react-redux";
import { actionCreators } from './store';

function Header(props) {
    const { app, handleChangeVal } = props;
    return (
        <div>
            {123}
            {app}
            <div onClick={() => handleChangeVal()}>chick  me</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    app: state.header.app,
});

const mapDispatch = (dispatch) => ({
    handleChangeVal() {
        dispatch(actionCreators.changeVal('hello immer'));
    }
});

export default  connect(mapStateToProps, mapDispatch)(Header);
