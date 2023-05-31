import React from "react";
import Navbar from '../component/navbar';
import { useState } from "react";
import './quiz.css'
import { Link } from "react-router-dom";

//make quiz page
function Quiz() {
    const questions = [
        {
            questionText: 'Mengapa penting untuk menggunakan kata-kata yang baik dan sopan saat berbicara dengan orang lain di internet?',
            answerOptions: [
                { answerText: 'Agar bisa menunjukkan kekuatanmu', isCorrect: false },
                { answerText: 'Agar bisa populer di internet', isCorrect: false },
                { answerText: 'Agar menciptakan lingkungan yang menyenangkan', isCorrect: true },
                { answerText: 'Agar bisa menunjukkan kecerdasanmu', isCorrect: false },
            ],
        },
        {
            questionText: 'Apa yang bisa kamu lakukan jika melihat seseorang di internet yang sedang kesulitan?',
            answerOptions: [
                { answerText: 'Mengolok-olok mereka', isCorrect: false },
                { answerText: 'Menawarkan bantuan dan dukungan kepada mereka', isCorrect: true },
                { answerText: 'Membagikan informasi probadi mereka', isCorrect: false },
                { answerText: 'Mengabaikan mereka', isCorrect: false },
            ],
        },
        {
            questionText: 'Mengapa kamu perlu menjaga privasi dan informasi pribadimu?',
            answerOptions: [
                { answerText: 'Agar bisa mengintai orang lain tanpa sepengatahuan mereka', isCorrect: false },

                { answerText: 'Agar bisa melaporkan orang-orang yang tidak kita sukai', isCorrecct: false},
            
                { answerText: 'Agar bisa melindungi diri kita sendiri dari oran lain', isCorrect: true },

                { answerText: 'Agar bisa menghina orang lain', isCorrect: false },
            ],
        },
        {
            questionText:'Apa yang bisa kamu lakukan jika kamu memiliki pengetahuan atau keterampilan        khusus di bidang tertentu di internet?',
            answerOptions: [
                { answerText: 'Simpan pengetahuan dan keterampilanmu sendiri', isCorrect:false},

                { answerText: 'Bagikan pengetahuan dan keterampilanmu dengan teman-temanmu agar bisa saling membantu dan tumbuh bersama', isCorrect:true},

                { answerText: 'Gunakan pengetahuan dan keterampilanmu untuk keuntungan pribadi tanpa berbagi dengan orang lain', isCorrect:false},

                { answerText: 'Jual pengetahuan dan keterampilanmu kepada orang lain dengan harga tinggi', isCorrect:false},
            ],
        },
        {
            questionText: 'Apa yang bisa kamu lakukan untuk membuat dunia maya menjadi tempat yang ramah dan menyenangkan untuk semua orang?',
            answerOptions: [
                { answerText: 'Mengabaikan orang-orang yang berbeda dari dirimu', isCorrect:false},

                { answerText: 'Menghina orang-orang yang berbeda dari dirimu', isCorrect:false},

                { answerText: 'Memaksakan pendapatmu kepada orang lain', isCorrect:false},

                { answerText: 'Menghormati perbedaan dan menerima orang lain apa adanya', isCorrect:true}
            ],
        },
        {
            questionText: 'Apa yang bisa terjadi jika kita berbuat baik di internet?',
            answerOptions: [
                { answerText: 'Membuat dunia maya menjadi tempat yang lebih indah dan menyenangkan', isCorrect:true},

                { answerText: 'Meningkatkan popularitas kita di dunia maya',
                isCorrect:false},

                { answerText: 'Membuat orang lain iri kepada kita',isCorrecct:false},

                { answerText: 'Membuat orang lain tidak suka kepada kita', isCorrect:false},
            ],
        },
        {
            questionText: 'Mengapa penting utnuk menghindari perilaku yang merugikan seperti menyakiti perasaan orang lain dan menyebarkan cerita bohong di internet?',
            answerOptions: [
                { answerText: 'Agar kita bisa mendapatkan perhatian dari orang lain', isCorrect:false},

                { answerText: 'Agar kita bisa memenangkan pertarungan online', isCorrect:false},

                { answerText: 'Agar kita bisa membuat orang lain merasa tidak nyaman', isCorrect:false},

                { answerText: 'Agar kita bisa menjaga hubungan yang baik dengan orang lain', isCorrect:true},
            ],
        },
        {
            questionText: 'Apa yang bisa kamu lakukan untuk mendukung hal-hal baik di internet?',
            answerOptions: [
                { answerText: 'Mengabaikan dan tidak peduli dengan masalah sosial', isCorrect:false},

                { answerText: 'Membagikan informasi palsu dan menyebarluaskan kebencian', isCorrect:false},

                { answerText: 'Ikut serta dalam kampanye sosial dan membantu orang yang membutuhkan', isCorrect:true},

                { answerText: 'Menghina orang lain dan membuat mereka merasa tidak nyaman', isCorrect:false},
            ],
        },
        {
            questionText: 'Apa yang bisa kamu lakukan untuk menjadi pahlawan di internet?',
            answerOptions: [
                {answerText: 'Mengolok-olok orang lain dan menyakiti perasaan mereka', isCorrect:false},

                {answerText: 'Membagikan informasi pribadi orang lain', isCorrect:false},

                {answerText: 'Membagikan informasi palsu dan menyebarluaskan kebencian', isCorrect:false},

                {answerText: 'Tidak membagikan Hoax, menjaga privacy, berbuat baik di internet, dan memberi waktu untuk kegiatan fisik'}
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score,setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    };

    //make trya again button
    const tryAgain = () => {
        window.location.reload();
    }

    return (
        <div>
            <Navbar />
            <div className='quiz'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}<br/><br/>
                        <button onClick={() => tryAgain()}>Try Again</button>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}


export default Quiz;