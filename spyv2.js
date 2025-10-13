"use strict";
(function () {
    if (window.__SPYMODULE) {
        __SPYMODULE?.end();
        delete window.__SPYMODULE
    }
    const Module = (function () {
        let completeCsrCount = 0;
        const originalSetTimeout = setTimeout;
        const setTimeoutSet = new Set();
        const callbacks = {
            phase1: function phase1() {
                console.log("Phase1");

                function selectMultiples() {
                    function notIncludesNumber(el) {
                        return el.innerHTML.includes('1') || el.innerHTML.includes('2') || el.innerHTML.includes('3') || el.innerHTML.includes('4') || el.innerHTML.includes('5') || el.innerHTML.includes('6') || el.innerHTML.includes('7') || el.innerHTML.includes('8') || el.innerHTML.includes('9') || el.innerHTML.includes('0');
                    }

                    const findEl1 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('목적중심'));
                    if (findEl1.length > 0) findEl1[0].click();
                    const findEl2 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('긍정열기'));
                    if (findEl2.length > 0) findEl2[0].click();
                    const findEl3 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('결과추적'));
                    if (findEl3.length > 0) findEl3[0].click();
                    const findEl4 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('성과중심'));
                    if (findEl4.length > 0) findEl4[0].click();
                    const findEl5 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('전략검토'));
                    if (findEl5.length > 0) findEl5[0].click();
                    const findEl6 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('합리검토'));
                    if (findEl6.length > 0) findEl6[0].click();
                    const findEl7 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('감정 점검'));
                    if (findEl7.length > 0) findEl7[0].click();
                    const findEl8 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('최선 태도'));
                    if (findEl8.length > 0) findEl8[0].click();
                    const findEl9 = Array.from(document.querySelectorAll('button').values()).filter((el) => notIncludesNumber(el) && el.innerHTML.includes('변화 의지'));
                    if (findEl9.length > 0) findEl9[0].click();


                }

                function selectNumbers() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:has(svg))').values()).filter((el) => el.innerHTML.includes('9점'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function clickConfirm() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML === '확인');
                    if (findEl.length > 0) {
                        findEl[0].click();
                        _startPhaseAfterSecond('phase2');
                    }
                }

                selectMultiples();
                selectNumbers();
                clickConfirm();
            },
            phase2: function phase2() {
                console.log("Phase2");

                function feeling() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML.includes('뿌듯한'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function temper() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML.includes('매우 만족'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function slider() {
                    const findSlider = Array.from(document.querySelectorAll('[role="slider"]'));

                    function slideToEnd(el) {
                        el.focus();

                        // Send "End" key to go to maximum value
                        el.dispatchEvent(new KeyboardEvent('keydown', {
                            key: 'End',

                            bubbles: true
                        }));
                    }

                    findSlider.forEach(slideToEnd);
                }

                function clickConfirm() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML === '확인');
                    if (findEl.length > 0) {
                        findEl[0].click();
                        _startPhaseAfterSecond('phase3');
                    }
                }

                feeling();
                temper();
                slider();
                clickConfirm();
            },
            phase3: function phase3() {
                console.log("Phase3");

                function selectTarget() {
                    const findLastConversation = document.querySelector('li:last-of-type>section>:nth-child(2)>:nth-child(1)')
                    if (findLastConversation) findLastConversation.click();
                }

                function clickConfirm() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML.includes('확인'));
                    if (findEl.length > 0) {
                        findEl[0].click();
                        _startPhaseAfterSecond('phase4')
                    }
                }

                selectTarget();
                clickConfirm();
            },
            phase4: function phase4() {
                console.log("Phase4");

                function selectFree() {
                    const findFree = document.querySelector('li:last-of-type>div:last-of-type>:nth-child(2)>:nth-child(2)>:nth-child(3)')
                    if (findFree) findFree.click();
                }

                function clickConfirm() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)').values()).filter((el) => el.innerHTML === '확인');
                    if (findEl.length > 0) {
                        findEl[0].click();
                        _startPhaseAfterSecond('phase5');
                    }
                }

                selectFree();
                clickConfirm();
            },
            phase5: function phase5() {
                console.log("Phase5", completeCsrCount);

                function passThings() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('넘어갈게요'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function completeCSR() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('회고 완료'));
                    if (findEl.length > 0 && completeCsrCount === 1) {
                        findEl[0].click();
                        completeCsrCount++;
                    }
                }

                function completeCSR2() {
                    const findEl = Array.from(document.querySelectorAll('button:not(:disabled)')).filter(v => v.innerHTML.includes('회고 완료'));
                    if (findEl.length > 0 && completeCsrCount === 0) {
                        findEl[0].click();
                        completeCsrCount++;
                    }
                }

                function doitNextOrShare() {
                    const findShareEl = Array.from(document.querySelectorAll('li:last-of-type button')).filter(v => v.innerHTML.includes('공유하기'));
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('다음에 할게요'));
                    if (findShareEl.length > 0 && findEl.length > 0 && findShareEl[0]?.parentNode === findEl[0]?.parentNode) {
                        findShareEl[0].click();
                        return;
                    }
                    if (findEl.length > 0) findEl[0]?.click();
                }

                function checkLastShareMember() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('직전 공유 대상자 불러오기'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function share() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('공유하기'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function checkConfirm() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:not(:disabled)')).filter(v => v.innerHTML.includes('확인'));
                    if (findEl.length > 0) findEl[0].click();
                }

                function findEndpoint() {
                    const findEl = Array.from(document.querySelectorAll('li:last-of-type button:has(svg):not(:disabled)')).filter(v => v.innerHTML.includes('회고 완료'));
                    if (findEl.length > 0) {
                        findEl[0].click();
                        observerMaps.get('phase5')?.disconnect();
                        observerMaps.delete('phase5');
                        _end();
                    }

                }

                passThings();
                // checkCSR();
                completeCSR();
                completeCSR2();
                doitNextOrShare();
                checkLastShareMember();
                share();
                checkConfirm();
                findEndpoint();
            }
        }
        let _current = '';
        let observer = null;
        let observerMaps = new Map();
        let interval = null;

        function _end() {
            clearInterval(interval);
        }

        function _startPhase(cb) {
            let cbFunc = typeof cb === 'function' ? cb : callbacks[cb];
            _current = cb.name;
            _end();
            interval = setInterval(cbFunc, 1000);
        }

        function _startPhaseAfterSecond(cb, second = 1) {
            _end();
            setTimeout(() => {
                _startPhase(cb);
            }, second * 1000);
        }


        return {
            init: function (autoStart = true) {
                this.modifySetTimeout();
                this.registerSetTimeoutIgnore(20);
                if (autoStart) _startPhase('phase1');
            },
            modifySetTimeout: function () {
                window.setTimeout = function (callback, delay, ...args) {
                    if (setTimeoutSet.has(delay)) {
                        delay = 0;
                    }
                    return originalSetTimeout(callback, delay, ...args);
                };
            },
            registerSetTimeoutIgnore: function (delay) {
                setTimeoutSet.add(delay);
            },
            startPhase: _startPhase,
            end: _end,
            get current() {
                return _current;
            }
        }
    })()
    window.__SPYMODULE = Module;
    Module.init(window.__SPYAUTOSTART);
})();
