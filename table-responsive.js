
(function($){
	var TableResponsive = function( element ) {
		if( !element ) {
			throw new Error( "TableResponsive requires an element." );
		}
		this.header = [];
		this.table = element;
		this.$table = $(element);
		this.mode = this.$table.attr( "data-table-responsive-mode" ) || '';
	};
	
	TableResponsive.prototype.initialize = function() {
		this.$table.find('th').parent('tr').addClass('hidden-table-responsive-header');
		this.prepare();
		this.update();
	}
	
	TableResponsive.prototype.prepare = function() {
		var table_header = [];
		var $tp = this.$table.find('th').parent();
		$tp.find('th').each(function(rowno) {
			table_header[rowno] = $(this).html();
		});
		this.header = table_header;
	};
	
	TableResponsive.prototype.update = function() {
		var table_header = this.header;
		var $tr = this.$table.find('tr');
		$tr.each(function() {
			var row = $(this);
			row.find('td').each(function(rowno) {
				var column = $(this);
				if (!column.children('span.table-responsive-cell-content').length) {
					column.html('<b class="table-responsive-cell-label">' + table_header[rowno] + '</b><span class="table-responsive-cell-content">' + column.html() + '</span>');
				}
			});
		});
	};
})(jQuery);


