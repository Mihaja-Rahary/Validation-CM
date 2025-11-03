import React, { useState } from 'react';

interface LoginProps {
    onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onLogin(name.trim());
        }
    };

    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Identification</h2>
            <p className="text-gray-400 mb-8">Veuillez entrer votre nom pour commencer l'évaluation.</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full max-w-sm p-3 bg-gray-900 border-2 border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition text-center"
                    required
                />
                <button
                    type="submit"
                    className="w-full max-w-sm px-6 py-3 text-base font-bold text-white bg-indigo-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-indigo-700 disabled:opacity-50"
                    disabled={!name.trim()}
                >
                    Démarrer l'évaluation
                </button>
            </form>
        </div>
    );
};

export default Login;
