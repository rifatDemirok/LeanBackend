const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// OEE Parametreleri Alt Şeması
const OeeParametersSchema = new mongoose.Schema({
  plannedWorkHours: { type: Number, required: true },
  criticalPerformanceThresholds: {
    availability: { type: Number, required: true },
    performance: { type: Number, required: true },
    quality: { type: Number, required: true },
  },
});

// Atanmış Operatörler Alt Şeması
const AssignedOperatorSchema = new mongoose.Schema({
  operatorId: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true },
  assignmentDate: { type: Date, required: true },
});

// Bakım Geçmişi Alt Şeması
const MaintenanceHistorySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true },
  maintenanceType: { type: String, required: true },
  performedBy: { type: String, required: true },
});

// Makine Modeli Ana Şema
const MachineSchema = new mongoose.Schema(
  {
    machineCode: { type: String, required: true, unique: true }, // Benzersiz makine kodu
    name: { type: String, required: true },
    statusActivity: { type: Boolean, required: true },
    
    type: { type: String, required: true }, // CNC, Torna, Freze vb.
    model: { type: String, required: true },
    productionLine: { type: String, required: true },
    yearOfInstallation: { type: Number, required: true },
    oeeParameters: { type: OeeParametersSchema, required: true },
    assignedOperators: [AssignedOperatorSchema],
    maintenanceHistory: [MaintenanceHistorySchema],
    status: {
      isActive: { type: Boolean, required: true },
      lastMaintenanceDate: { type: Date },
      currentStatus: { type: String, required: true }, // Aktif, Bakımda, Arızalı
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Otomatik olarak createdAt ve updatedAt alanlarını ekler
);

module.exports = mongoose.model("Machine", MachineSchema);


// Modeli oluştur
// const Machine = model("Machine", MachineSchema);
// module.exports = Machine;
