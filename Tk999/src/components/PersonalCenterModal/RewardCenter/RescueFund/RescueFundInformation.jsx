

const RescueFundInformation = () => {

    const productData = [
        {
          title: "Products",
          items: ["Slot", "Sports", "Fishing", "Live Casino", "Esports"],
        },
        {
          title: "Net Loss",
          items: [
            "≥ 99.00",
            "≥ 999.00",
            "≥ 4999.00",
            "≥ 500.00",
            "≥ 8000.00,≥ 99.00",
            "≥ 999.00",
            "≥ 4999.00",
            "≥ 500.00",
            "≥ 8000.00,≥ 99.00",
            "≥ 999.00",
            "≥ 4999.00",
            "≥ 500.00",
            "≥ 8000.00",
          ],
        },
        {
          title: " Ratio",
          items: ["৳9", "৳99", "৳999", "৳9999", "0.25%", "1%", "2.5%"],
        },
      ];
    return (
        <div className="grid grid-cols-3 gap-4 h-64 overflow-y-auto text-center">
                      {productData.map((column, index) => (
                        <div key={index}>
                          <h3 className=" font-bold text-gray-600 mb-2">
                            {column.title}
                          </h3>
                          {column.items.map((item, idx) => (
                            <p
                              key={idx}
                              className="text-sm text-gray-700 py-1 border-b last:border-none"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
    );
};

export default RescueFundInformation;