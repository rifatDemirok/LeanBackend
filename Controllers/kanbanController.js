const Kanban = require("../Models/kanban");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Kullanıcı kaydı
// Controllers/kanbanController.js
exports.addKanban = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const kanban = new Kanban({
      kanbanType: req.body.payload.kanbanType,
      kanbanNo: req.body.payload.kanbanNo,
      productCode: req.body.payload.productCode,
      productName: req.body.payload.productName,
      quantity: req.body.payload.quantity,
      party: req.body.payload.party,
      sourceWarehouse: req.body.payload.sourceWarehouse,
      targetWarehouse: req.body.payload.targetWarehouse,
      boxType: req.body.payload.boxType,
      createdDate: new Date(req.body.payload.createDate),
    });

    const savedKanban = await kanban.save();
    console.log("Saved Kanban:", savedKanban);

    res.status(201).json(savedKanban);
  } catch (error) {
    console.error("Error creating kanban:", error);
    res.status(400).json({
      message: "Kanban oluşturulurken hata oluştu",
      error: error.message,
    });
  }
};

exports.getKanban = async (req, res) => {
  try {
    const getKanbans = await Kanban.find();
    res.status(200).json({ kanbans: getKanbans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
// Controllers/kanbanController.js

exports.updateKanban = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Geçersiz ID formatı",
      });
    }

    // Log ekleyelim
    console.log("Update isteği:", {
      id: id,
      updateData: req.body,
    });

    const updatedKanban = await Kanban.findByIdAndUpdate(
      id,
      { $set: req.body }, // $set operatörü ekledik
      {
        new: true, // Güncellenmiş dokümanı döndür
        runValidators: true, // Şema validasyonlarını çalıştır
      }
    );

    // Doküman bulunamadıysa
    if (!updatedKanban) {
      return res.status(404).json({
        success: false,
        message: "Kanban kartı bulunamadı",
      });
    }

    // Log ekleyelim
    console.log("Güncellenen doküman:", updatedKanban);

    // Başarılı yanıt
    res.status(200).json({
      success: true,
      message: "Kanban kartı başarıyla güncellendi",
      data: updatedKanban,
    });
  } catch (error) {
    console.error("Güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      message: "Güncelleme sırasında bir hata oluştu",
      error: error.message,
    });
  }
};
exports.deleteKanban = async (req, res) => {
  try {
    const { id } = req.params;

    // ID formatını kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Geçersiz ID formatı" });
    }

    const deletedKanban = await Kanban.findByIdAndDelete(id);

    if (!deletedKanban) {
      return res.status(404).json({ message: "Kanban bulunamadı" });
    }

    res
      .status(200)
      .json({ message: "Kanban başarıyla silindi", deletedKanban });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};
