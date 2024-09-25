import React, { useState, useEffect } from 'react';

function Clock({ onTimeChange }) { // 부모로부터 전달받은 onTimeChange 함수를 호출
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date();
            setTime(newTime);
            onTimeChange(newTime.getSeconds());  // 초(second)를 부모 컴포넌트에 전달
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
    }, [onTimeChange]);

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2> {/* 시간 렌더링 */}
        </div>
    );
}

export default Clock;