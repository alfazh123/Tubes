import React from "react";
import Navbar from '../component/navbar';
import { useState } from "react";
import './quiz.css'
import { Link } from "react-router-dom";

//make quiz page
function Quiz() {
    const questions = [
        //hoaks
        {
            questionText: 'Mengapa penting untuk memeriksa kebenaran ind=formasi sebelum menyebarkannya?',
            answerOptions: [
                { answerText: 'Agar mendapatkan popularitas di media sosial', isCorrect: false},
                { answerText: 'Agar orang lain terhibur', isCorrect: false},
                { answerText: 'Agar informasi yang disebarkan tidak menyesatkan dan merugikan', isCorrect: true},
                { answerText: 'Agar orang lain percaya kepada kita', isCorrect: false},
            ],
        },
        {
            questionText:'Bagaimana cara memeriksa kebenaran suatu informasi?',
            answerOptions: [
                { answerText: 'Langsung membagikan informasi kepada semua teman tanpa mengecek kebenaran', isCorrect:false},
                { answerText: 'Mencari tau dari mana berita tersebut', isCorrect:true},
                { answerText: 'Menambahkan sentuhan pribadi pada informasi tersebut', isCorrect:false},
                { answerText: 'Membuat informasi tersbut terdengar menarik tanpa melihat kebenarannya', isCorrect:false},
            ],
        },
        //privasi
        {
            questionTExt: 'Informasi pribadi apa yang perlu kamu lindungi?',
            answerOptions: [
                { answerText: 'Nama, alamat, nomor telepon, dan informasi lain yang bisa digunakan untuk mengidentifikasi diri kita', isCorrect: true},
                { answerText: 'Foto-foto yang tidak bagus', isCorrect: false},
                { answerText: 'Informasi tentang hobi kita', isCorrect: false},
                { answerText: 'Cerita-cerita lucu tentang hewan peliharaanmu', isCorrect: false},
            ]
        },
        {
            questionText: 'Apa yang harus kamu lakukan jika dimita membagikan informasi probadi secara online?',
            answerOptions: [
                { answerText: 'MEngabaikannya dan tidak memberikan infomasi tersebut', isCorrect: true},
                { answerText: 'Memberikan informasi tersebut tanpa berpikir panjang', isCorrect: false},
                { answerText: 'Menyebarkan informasi tersebut kepada semua teman', isCorrect: false},
                { answerText: 'Mengomentari informasi tersebut dengan kata-kata kasar', isCorrect: false},
            ],
        },
        //berbuat baik di internet
        {
            questionText: 'Dari keempat hal dibawah ini mana yang termasuk hal berbuat baik di internet?',
            answerOptions: [
                { answerText: 'Menggunakan kata-kata yang kasar di internet', isCorrect: false},
                { answerText: 'Membagian foto atau video orang lain tanpa izin', isCorrect: false},
                { answerText: 'Membantu orang lain, menjaga sopan santun, dan meyebarkan informasi yang benar', isCorrect: true},
                { answerText: 'Menyebarkan informasi palsu kepada orang lain', isCorrect: false},
            ],
        },
        {
            questionText: 'Apa yang harus kamu lakukan jika melihat atau mengalami perilaku yang mencurigakan atau tidak aman di internet?',
            answerOptions: [
                { answerText: 'Mengabaikannya dan tidak melakukan apa-apa', isCorrect: false},
                { answerText: 'Melakukan perilaku yang sama seperti orang tersebut', isCorrect: false},
                { answerText: 'Menyebarkan informasi tersebut kepada semua teman', isCorrect: false},
                { answerText: 'Memberi tahu orang tua atau guru tantang hal tersebut', isCorrect: true},
            ],
        },
        {
            questionText: 'Mengapa penting untuk menggunakan kata sandi yang kuat di akun-akun kita di internet?',
            answerOptions: [
                { answerText: 'Agar kata sandi tidak mudah ditebak oleh orang lain', isCorrect: true},
                { answerText: 'Agar kita bisa mendapatkan banyak pengikut di media sosial', isCorrect: false},
                { answerText: 'Agar kata sandi mudah di ingat oleh orang lain', isCorrect: false},
                { answerText: 'Agar orang lain bisa menggunakan akun kita untuk kepentingan probadi mereka', isCorrect: false},
            ],
        },
        //soal tambahan
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
                        <p>Jika kamu masih belum memahami materi <br/>kamu bisa belajar terlebih dahulu <Link to='/' className="kembali-belajar-btn">Disini</Link></p>
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