const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    currentAddress: {
        type: String,
        required: true
    },
    mailingAddress: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    }, 
    identityNumber: { type: String, required: true, unique: true },
    identityIssuedDate: { type: Date, required: true },
    identityExpiryDate: { type: Date },
    identityIssuedPlace: { type: String, required: true },
    identityCountry: { type: String, required: false }, // Chỉ dùng cho passport
    identityHasChip: { type: Boolean, required: false }, // Chỉ dùng cho CCCD
    identityNotes: { type: String, required: false }, // Chỉ dùng cho passport nếu có ghi chú
    nationality: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    studentStatus: {
        type: String,
        required: true,
        enum: ["Đang học", "Đã tốt nghiệp", "Đã thôi học", "Tạm dừng học"]
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
