const db = require('../models');

// Thêm Ticker mới
exports.addTicker = async (req, res) => {
    try {
        const { symbol, name, market } = req.body;
        const newTicker = await db.ticker.create({ symbol, name, market });
        res.status(201).json(newTicker);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi thêm ticker', error });
    }
};

// Lấy danh sách Ticker
exports.getTickers = async (req, res) => {
    try {
        const tickers = await db.ticker.findAll();
        res.status(200).json(tickers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi lấy danh sách ticker', error });
    }
};

// Cập nhật Ticker
exports.updateTicker = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        await db.ticker.update(updates, { where: { ticker_id: id } });
        res.status(200).json({ message: 'Cập nhật thành công' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi cập nhật ticker', error });
    }
};

// Xóa Ticker
exports.deleteTicker = async (req, res) => {
    try {
        const { id } = req.params;
        await db.ticker.destroy({ where: { ticker_id: id } });
        res.status(200).json({ message: 'Xóa thành công' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi xóa ticker', error });
    }
};