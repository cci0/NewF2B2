import React, { useRef } from 'react';

import '../styles/login.scss';

export default function Login() {
    const passwordRef = useRef();

    return (
        <div className="login-sec">
            <div className="user-box">
                <div className="login-title">로그인</div>
                <form name="form-login">
                    <div className="user-id">
                        <i className="fa-solid fa-user-large"></i>
                        <input
                            type="text"
                            className="user-id-box"
                            id="user_id"
                            pattern="[A-Za-z0-9]+"
                            placeholder="아이디"
                            required
                        />
                    </div>
                    <div className="user-pw">
                        <i className="fa-solid fa-passport"></i>
                        <input
                            ref={passwordRef}
                            type="password"
                            className="user-pw-box"
                            id="user_pw"
                            pattern="{4, 8}"
                            required
                            placeholder="비밀번호"
                        />
                    </div>
                </form>

                <div class="id-save">
                    <input type="checkbox" className="id-autoSave" id="idAutoSave" />
                    <label for="idAutoSave">아이디 저장</label>
                </div>

                <div>
                    <button type="button" className="login-btn" id="loginBtn" onclick="loginFunc()">
                        로그인
                    </button>
                </div>
            </div>

            <div className="not-user">
                <div className="find-user">
                    <div className="find-id">
                        <a href="">
                            <span className="find-id-click">아이디 찾기</span>
                        </a>
                    </div>
                    <div className="find-pw">
                        <a href="">
                            <span className="find-pw-click">비밀번호 찾기</span>
                        </a>
                    </div>
                </div>

                <div className="signup-box">
                    <a href="/signup">
                        <span className="signup">회원가입</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
