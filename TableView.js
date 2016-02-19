<script>
	var a = {};
	$.getJSON('file.json', function(data){
		a = data;
		$.each(a, function(idx, rock){
			$('table#t TBODY').append('<tr><td>'+rock.SampleNumber+'</td><td>'+rock.RockType +'</td><td>'+rock.Latitude +'</td></tr>'+rock.Longitude +'</td></tr>');
		});
	});
</script>

<table id="t">
	<thread><tr><th>SampleNumber<\th><th>RockType<\th><th>Latitude<\th><th>Longitude<\th>
	<tbody></tbody>
</table>